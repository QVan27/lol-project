<?php

namespace App\Controller;

use App\Entity\Player;
use App\Entity\MatchTimeline;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\CallApiService;
use Symfony\Component\BrowserKit\Request;


class ApiJsonController extends AbstractController
{

    #[Route('/timeline', name: 'app_timeline')]
    public function AddMatchTimeline(ManagerRegistry $doctrine, CallApiService $callApiService): Response
    {
        $entityManager = $doctrine->getManager();

        $apijson = new MatchTimeline();
        $apijson->setMatchtimelinejson($callApiService->getTimeline());
        
        // Loop array $arraytimeline and store in database.
        $arraytimeline = $callApiService->getTimeline();
        $arraytimeline = array_slice($arraytimeline, 0, 10);
        foreach ($arraytimeline as $key => $value) {
            $apijson->setMatchtimelinejson($value);
            $entityManager->persist($apijson);
            $entityManager->flush();
        }
            
        $entityManager->persist($apijson);
        $entityManager->flush();
            
        return $this->render('api/index.html.twig', [
            'controller_name' => 'ApiJsonController',
            'data' => $callApiService->getTimeline(),
        ]);

      
       
    
        
    
    }

    #[Route('/addmatch/{user}', name: 'app_addmatch')]
    public function AddMatchbyuser($user, ManagerRegistry $doctrine, CallApiService $callApiService)  
    {
        $entityManager = $doctrine->getManager();
        // dd($user);
        

        $apijson_user = new Player();
        $apijson_user->setPlayerjson($callApiService->getPlayer($user));
  
        

        

        return $this->render('api/index.html.twig', [
            'controller_name' => 'ApiJsonController',
            'data' => $callApiService->getPlayer(),
        ]);
       
       

    }
}
