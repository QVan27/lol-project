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

    /**
     * Get Player by Name
     */

    #[Route('/bdd/{name}', name: 'player')]
    public function getPlayer(ManagerRegistry $doctrine, string $name = "")
    {
        // Get Player by Name
        $player = $doctrine->getRepository(Players::class)->findOneBy(['name' => $name]);
        // Return Player
        if (!$player) {
            throw $this->createNotFoundException(
                'No player found for name ' . $name
            );
        }
        return new JsonResponse($player->getName());
    }

    /**
     * Get Matches (resume) with QueryBuilder
     */

    #[Route('/bdd/{name}/matches', name: 'matches')]
    public function getMatches(ManagerRegistry $doctrine, string $name = "")
    {
        $jsonResponse = new JsonResponse();
        // Get Player by Name
        $player = $doctrine->getRepository(Players::class)->findOneBy(['name' => $name]);
        // QueryBuilder
        $qb = $this->manager->createQueryBuilder();
        $qb->select('m')
            ->from(Matches::class, 'm')
            ->where('m.idPlayer = :idPlayer')
            ->select('m.resume')
            ->setParameter('idPlayer', $player->getId());
        $matches = $qb->getQuery()->getResult();
        // Return Json Response
        if (!$matches) {
            throw $this->createNotFoundException(
                'No matches found'
            );
        }
        return $jsonResponse->setContent($this->dataSerializer->serialize($matches));
    }


    /**
     * Get Single Match (timeline) with QueryBuilder
     */
    #[Route('/bdd/{name}/matches/{id}', name: 'single_match')]
    public function getSingleMatch(ManagerRegistry $doctrine, string $name = "", string $id = "")
    {
        $jsonResponse = new JsonResponse();
        // Get Player by Name
        $player = $doctrine->getRepository(Players::class)->findOneBy(['name' => $name]);
        // QueryBuilder
        $qb = $this->manager->createQueryBuilder();
        $qb->select('m')
            ->from(Matches::class, 'm')
            ->where('m.idPlayer = :idPlayer')
            ->andWhere('m.matchId = :matchId')
            ->select('m.timeline')
            ->setParameter('idPlayer', $player->getId())
            ->setParameter('matchId', $id);
        $match = $qb->getQuery()->getResult();
        // Return Json Response
        if (!$match) {
            throw $this->createNotFoundException(
                'No match found'
            );
        }
        return $jsonResponse->setContent($this->dataSerializer->serialize($match));
    }
}
