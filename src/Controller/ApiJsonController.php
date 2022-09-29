<?php

namespace App\Controller;

use App\Entity\APIJSON;
use App\Entity\Matches;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\CallApiService;

class ApiJsonController extends AbstractController
{

    #[Route('/json', name: 'app_create_api_json')]
    public function createApiJson(ManagerRegistry $doctrine, CallApiService $callApiService): Response
    {
        $entityManager = $doctrine->getManager();

        $apijson = new APIJSON();
        $apijson->setJsonScript($callApiService->getData());
        

        $entityManager->persist($apijson);

        $entityManager->flush();

        return new Response('test'.$apijson->getId());
    }

    #[Route('/ma', name: 'app_create_api_json')]
    public function insertMatchesInBD(ManagerRegistry $doctrine, CallApiService $callApiService)  
    {
        $entityManager = $doctrine->getManager();

        $matches = new Matches();
        
        $matches = $callApiService->getMatches();
        
        foreach($matches as $valeur)
        {
            $valeur->setMatchId();
            $entityManager->flush();
        }
        // $nbMatches = count($matches);
        // for ($i=0; $i <= 10;)
        // {
        //     dd($matches);
        //     $i = $i + 4;
        // }
       
       

    }
}
