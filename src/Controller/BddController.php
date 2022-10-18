<?php

namespace App\Controller;

use App\Entity\Matches;
use App\Entity\Players;

use App\Service\DataSerializer;

use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class BddController extends AbstractController
{

    private $dataSerializer;

    public function __construct(DataSerializer $dataSerializer, EntityManagerInterface $manager)
    {
        $this->dataSerializer = $dataSerializer;
        $this->manager = $manager;
    }

    #[Route('/bdd/get/{name}', name: 'bdd_get_player')]
    public function getPlayer(ManagerRegistry $doctrine, string $name = "")
    {
        $player = $doctrine->getRepository(Players::class)->findOneBy(['name' => $name]);
        if (!$player) {
            throw $this->createNotFoundException(
                'No player found for name ' . $name
            );
        }
        return new JsonResponse($player->getName());
    }

    #[Route('/bdd/{name}/matches', name: 'bdd_get_matches_from_player')]
    public function getMatches(ManagerRegistry $doctrine, string $name = "")
    {
        $jsonResponse = new JsonResponse();

        $player = $doctrine->getRepository(Players::class)->findOneBy(['name' => $name]);
        $matches = $doctrine->getRepository(Matches::class)->findAll(
            [
                'idPlayer' => $player->getId()
            ]
        );
      
        if (!$matches) {
            throw $this->createNotFoundException(
                'No matches found'
            );
        }
        return $jsonResponse->setContent($this->dataSerializer->serialize($matches));
    }


}
