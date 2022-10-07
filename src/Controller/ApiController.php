<?php

namespace App\Controller;

use App\Entity\Matches;
use App\Entity\Players;
use App\Service\DataSerializer;
use App\Repository\MatchesRepository;
use App\Repository\PlayersRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiController extends AbstractController
{

    private $dataSerializer;

    public function __construct(DataSerializer $dataSerializer, EntityManagerInterface $manager)
    {
        $this->jsonCircularSerializer = $dataSerializer;
        $this->manager = $manager;
    }

    #[Route('/api/add/{name}', name: 'app_api_riot')]
    public function fetchRiotApi(EntityManagerInterface $entityManager, string $name = "")
    {
        $token = "RGAPI-057c6048-0778-406c-844c-46dea7298bda";

        $user = $name;

        $urlApi = file_get_contents('https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' . $user . '?api_key=' . $token);

        $json = json_decode($urlApi, true);

        $player = new Players();
        $player->setPuuid($json['puuid']);
        $player->setName($json['name']);
        $entityManager->persist($player);

        $urlMatch = file_get_contents('https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/' . $json['puuid'] . '/ids?start=0&count=10&api_key=' . $token);
        $jsonMatch = json_decode($urlMatch, true);

        foreach ($jsonMatch as $match) {
            $matchs = new Matches();
            $matchs->setMatchId($match);
            $matchs->setIdPlayer($player);

            $player->addMatch($matchs);

            $urlTimeline = file_get_contents('https://europe.api.riotgames.com/lol/match/v5/matches/' . $match . '/timeline?api_key=' . $token);
            $jsonTimeline = json_decode($urlTimeline, true);
            $matchs->setTimeline($jsonTimeline);

            $entityManager->persist($matchs);
        }

        $entityManager->flush();
        return new Response('Saved new player with id ' . $player->getId());
    }

    #[Route('/api/get/{name}', name: 'app_api_bdd',)]

    public function fetchBdd(PlayersRepository $playersRepository, MatchesRepository $matchesRepository, string $name = "")
    {
        $player = $playersRepository->findOneBy(['name' => $name]);

        // SELECT matches.id, matches.timeline, matches.match_id FROM matches INNER JOIN matches_players on matches.id = matches_players.matches_id AND matches_players.players_id = 89 INNER JOIN players ON matches_players.players_id = players.id

        $matchs = $matchesRepository->findBy(['idPlayer' => $player->getId()]);

        $data = [];

        array_push($data, $player, $matchs);
        // array_push($data, $player, $matchs);
        $jsonContent = $this->dataSerializer->serialize($data, 'json');

        return JsonResponse::fromJsonString($jsonContent);
    }
}
