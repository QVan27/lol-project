<?php

namespace App\Controller;

use App\Entity\Matches;
use App\Entity\Players;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiController extends AbstractController
{
    #[Route('/api/add/{name}', name: 'app_api_riot')]
    public function fetchRiotApi(EntityManagerInterface $entityManager, string $name = "")
    {
        // Token for Riot API
        $token = "RGAPI-d21b16bb-ef55-491c-8b5a-3d26af5ba4ac";
        // Define $user variable
        $user = $name;
        // URL for Riot API
        $urlApi = file_get_contents('https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' . $user . '?api_key=' . $token);

        $json = json_decode($urlApi, true);

        // Create new player
        $player = new Players();
        $player->setPuuid($json['puuid']);
        $player->setName($json['name']);
        $player->setLevel($json['summonerLevel']);
        $player->setProfilIconId($json['profileIconId']);
        $entityManager->persist($player);

        // Create new match
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
        // Return a response from the API
        return new Response('Saved new player with id ' . $player->getId());
    }
}
