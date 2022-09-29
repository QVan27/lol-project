<?php

namespace App\Entity;

use App\Repository\MatchesRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MatchesRepository::class)]
class Matches
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 20)]
    private ?string $MatchId = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMatchId(): ?string
    {
        return $this->MatchId;
    }

    public function setMatchId(string $MatchId): self
    {
        $this->MatchId = $MatchId;

        return $this;
    }
}
