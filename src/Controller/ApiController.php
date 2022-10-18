<?php

namespace App\Controller;

use App\Entity\Matches;
use App\Entity\Players;
// use App\Service\DataSerializer;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiController extends AbstractController
{

    // private $dataSerializer;

    // public function __construct(DataSerializer $dataSerializer, EntityManagerInterface $manager)
    // {
    //     $this->dataSerializer = $dataSerializer;
    //     $this->manager = $manager;
    // }

    #[Route('/api/add/{name}', name: 'app_api_riot')]
    public function fetchRiotApi(EntityManagerInterface $entityManager, string $name = "")
    {
        $token = "RGAPI-d3f0ab28-fc9a-470f-8c66-b4710576bc25";

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

            $player->addGame($matchs);

            $urlTimeline = file_get_contents('https://europe.api.riotgames.com/lol/match/v5/matches/' . $match . '/timeline?api_key=' . $token);
            $jsonTimeline = json_decode($urlTimeline, true);
            $matchs->setTimeline($jsonTimeline);

            $urlResume = file_get_contents('https://europe.api.riotgames.com/lol/match/v5/matches/' . $match . '?api_key=' . $token);
            $jsonResume = json_decode($urlResume, true);
            $matchs->setResume($jsonResume);

            $entityManager->persist($matchs);
        }

        $entityManager->flush();
        return new Response('Saved new player with id ' . $player->getId());
    }

    // #[Route('/api/get/{name}', name: 'app_api_bdd',)]

    // public function fetchBdd(PlayersRepository $playersRepository, MatchesRepository $matchesRepository, string $name = ""): JsonResponse

    // // {
    // //     $player = $playersRepository->findOneBy(['name' => $name]);
    // //     $matches = $matchesRepository->findBy(['idPlayer' => $player->getId()]);

    // //     $data = $this->dataSerializer->serialize($matches);

    // //     return new JsonResponse($data);
    // // }
    // {
    //     $jsonResponse = new JsonResponse();

    //     $player = $playersRepository->findOneBy(['name' => $name]);


    //     $matchs = $matchesRepository->findBy(['idPlayer' => $player->getId()]);

    //     $data = [];


    //     array_push($data, $player, $matchs);

    //     $jsonResponse->setContent($this->dataSerializer->serialize($data, 'json'));
    //     return $jsonResponse;
    // }
}
