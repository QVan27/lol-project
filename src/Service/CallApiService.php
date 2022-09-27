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

    


    public function getData(): array
    {
        
            $response = $this->client->request(
            'GET',
            'https://europe.api.riotgames.com/lol/match/v5/matches/EUW1_6071143643/timeline?api_key=' . $this->parameterBag->get('api_key') 
        );

        return $response->toArray();
    }
}