<?php

namespace App\Repository;

use App\Entity\Matches;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Matches>
 *
 * @method Matches|null find($id, $lockMode = null, $lockVersion = null)
 * @method Matches|null findOneBy(array $criteria, array $orderBy = null)
 * @method Matches[]    findAll()
 * @method Matches[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MatchesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Matches::class);
    }

    public function save(Matches $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Matches $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    // /**
    //  * @return Matches[] Returns an array of Matches objects
    //  */
    // public function findByExampleField($value): array
    // {
    //     return $this->createQueryBuilder('m')
    //         ->andWhere('m.exampleField = :val')
    //         ->setParameter('val', $value)
    //         ->orderBy('m.id', 'ASC')
    //         ->setMaxResults(10)
    //         ->getQuery()
    //         ->getResult();
    // }

    /**
     * @return Find Matches from Player
     */

    public function findMatchesFromPlayer($player): array
    {
        // SELECT matches.id, matches.timeline, matches.match_id FROM matches INNER JOIN matches_players on matches.id = matches_players.matches_id AND matches_players.players_id = 89 INNER JOIN players ON matches_players.players_id = players.id

        $qb = $this->createQueryBuilder('m');
        $qb->select('m.id, m.timeline, m.match_id')
            ->innerJoin('matches_players', 'mp', 'WITH', 'm.id = mp.matches_id AND mp.players_id = :player')
            ->innerJoin('players', 'p', 'WITH', 'mp.players_id = p.id')
            ->setParameter('player', $player);
            
        return $qb->getQuery()->getResult();
    }

    //    public function findOneBySomeField($value): ?Matches
    //    {
    //        return $this->createQueryBuilder('m')
    //            ->andWhere('m.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
