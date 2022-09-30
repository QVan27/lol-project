<?php

namespace App\Service;

use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Component\DependencyInjection\ParameterBag\ContainerBagInterface;


class CallApiService
{
    
    private $client;
    private ContainerBagInterface $parameterBag;

    public function __construct(HttpClientInterface $client, ContainerBagInterface $parameterbag)
    {
        $this->client = $client;
        $this->parameterBag = $parameterbag;
    }

    


    public function getTimeline(): array
    {
        
            $response = $this->client->request(
            'GET',
            'https://europe.api.riotgames.com/lol/match/v5/matches/EUW1_6071143643/timeline?api_key=' . $this->parameterBag->get('api_key') 
        );

        return $response->toArray();
    }

    public function getPlayer($user) : array
    {
            $response = $this->client->request('GET',
            'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' . $user . '?api_key=' .$this-> parameterBag->get('api_key')
            
        );

        return $response->toArray();
    }
}
