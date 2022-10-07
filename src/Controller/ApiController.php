<?php

namespace App\Controller;

use App\Entity\Matches;
use App\Entity\Players;
use App\Repository\PlayersRepository;
use App\Repository\MatchesRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiController extends AbstractController
{
    #[Route('/api/add/{name}', name: 'app_api_riot')]
    public function fetchRiotApi(EntityManagerInterface $entityManager, string $name = "")
    {
        $token = "RGAPI-92d035ce-7e34-441a-bc30-8499e60cd4d3";

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
            $matchs->addPuuidPlayer($player);
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

        $matches = $matchesRepository->findMatchesFromPlayer($player);

        

        return $this->json($matches);



    }
}
