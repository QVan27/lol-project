<?php

namespace App\Entity;

use App\Repository\MatchesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MatchesRepository::class)]
class Matches
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $matchId = null;

    #[ORM\Column]
    private array $timeline = [];

    #[ORM\ManyToOne(inversedBy: 'games')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Players $idPlayer = null;

    public function __construct()
    {
        $this->puuidPlayer = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMatchId(): ?string
    {
        return $this->matchId;
    }

    public function setMatchId(string $matchId): self
    {
        $this->matchId = $matchId;

        return $this;
    }

    /**
     * @return Collection<int, Players>
     */
    public function getPuuidPlayer(): Collection
    {
        return $this->puuidPlayer;
    }

    public function addPuuidPlayer(Players $puuidPlayer): self
    {
        if (!$this->puuidPlayer->contains($puuidPlayer)) {
            $this->puuidPlayer->add($puuidPlayer);
        }

        return $this;
    }

    public function removePuuidPlayer(Players $puuidPlayer): self
    {
        $this->puuidPlayer->removeElement($puuidPlayer);

        return $this;
    }

    public function getTimeline(): ?array
    {
        return $this->timeline;
    }

    public function setTimeline(array $timeline): self
    {
        $this->timeline = $timeline;

        return $this;
    }

    public function getIdPlayer(): ?Players
    {
        return $this->idPlayer;
    }

    public function setIdPlayer(?Players $idPlayer): self
    {
        $this->idPlayer = $idPlayer;

        return $this;
    }
}
