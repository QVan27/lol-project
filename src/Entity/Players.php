<?php

namespace App\Entity;

use App\Repository\PlayersRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PlayersRepository::class)]
class Players
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $puuid = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\OneToMany(mappedBy: 'idPlayer', targetEntity: Matches::class)]
    private Collection $games;

    public function __construct()
    {
        $this->matches = new ArrayCollection();
        $this->games = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPuuid(): ?string
    {
        return $this->puuid;
    }

    public function setPuuid(string $puuid): self
    {
        $this->puuid = $puuid;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection<int, Matches>
     */
    // public function getMatches(): Collection
    // {
    //     return $this->matches;
    // }

    // public function addMatch(Matches $match): self
    // {
    //     if (!$this->matches->contains($match)) {
    //         $this->matches->add($match);
    //         $match->addPuuidPlayer($this);
    //     }

    //     return $this;
    // }

    // public function removeMatch(Matches $match): self
    // {
    //     if ($this->matches->removeElement($match)) {
    //         $match->removePuuidPlayer($this);
    //     }

    //     return $this;
    // }

    /**
     * @return Collection<int, Matches>
     */
    public function getGames(): Collection
    {
        return $this->games;
    }

    public function addGame(Matches $game): self
    {
        if (!$this->games->contains($game)) {
            $this->games->add($game);
            $game->setIdPlayer($this);
        }

        return $this;
    }

    public function removeGame(Matches $game): self
    {
        if ($this->games->removeElement($game)) {
            // set the owning side to null (unless already changed)
            if ($game->getIdPlayer() === $this) {
                $game->setIdPlayer(null);
            }
        }

        return $this;
    }
}
