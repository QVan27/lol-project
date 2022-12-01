import React from "react";
import styled from "styled-components";

const ResumeMatchContainer = styled.div`
  position: relative;
  width: min(100%, 992px);
  margin-inline: auto;
`;

// array with Standard summoner spells with key id and name

const summonerSpells = [
  { id: 7, name: "SummonerHeal" },
  { id: 6, name: "SummonerHaste" },
  { id: 3, name: "SummonerExhaust" },
  { id: 21, name: "SummonerBarrier" },
  { id: 32, name: "SummonerSnowball" },
  { id: 7, name: "SummonerDash" },
  { id: 11, name: "SummonerMana" },
  { id: 4, name: "SummonerFlash" },
  { id: 12, name: "SummonerTeleport" },
  { id: 1, name: "SummonerBoost" },
  { id: 21, name: "SummonerSmite" },
  { id: 14, name: "SummonerDot" },
];

export default function ResumeMatch({ data }: any) {
  return (
    <ResumeMatchContainer>
      <div className="container">
        <div className="match-details-container">
          <div className="match-details">
            <div className="result">
              {data.resume.info.teams[0].win ? " Victoire" : " Défaite"}
            </div>
            <div className="total-kill"></div>
            <div className="match-stats">
              {Math.floor(data.resume.info.gameDuration / 60) +
                "m " +
                (data.resume.info.gameDuration % 60) +
                "s"}
            </div>
            <div className="result">
              {data.resume.info.teams[1].win ? " Victoire" : " Défaite"}
            </div>
          </div>
        </div>

        <div className="match-container">
          <div className="champion-row line">
            {data.resume.info.participants.map(
              (participant: any, index: number) => {
                console.log(participant);
                if (participant.teamId === 100) {
                  return (
                    <div className="champion">
                      <div className="champion-data">
                        <div className="summoner-name">
                          <div className="content-champ">
                            <div className="content-champ__box">
                              <img
                                src={
                                  "http://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/" +
                                  participant.championName +
                                  ".png"
                                }
                                alt=""
                                width="16"
                                height="16"
                              />
                              <div className="level">
                                {participant.champLevel}
                              </div>
                            </div>
                            <div className="content-champ__info">
                              <p>{participant.summonerName}</p>
                              <div className="content-champ__info__spells">
                                <div className="content-champ__info__spells--spell">
                                  <img
                                    src={
                                      "http://ddragon.leagueoflegends.com/cdn/5.9.1/img/spell/" +
                                      summonerSpells.find(
                                        (spell) =>
                                          spell.id === participant.summoner1Id
                                      )?.name +
                                      ".png"
                                    }
                                    height="16"
                                    width="16"
                                  />
                                </div>
                                <div className="content-champ__info__spells--spell">
                                  <img
                                    src={
                                      "http://ddragon.leagueoflegends.com/cdn/5.9.1/img/spell/" +
                                      summonerSpells.find(
                                        (spell) =>
                                          spell.id === participant.summoner2Id
                                      )?.name +
                                      ".png"
                                    }
                                    height="16"
                                    width="16"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items">
                          {
                            <div className="content_item">
                              <img
                                src={
                                  participant.item0 === 0
                                    ? "https://www.mjt.me.uk/assets/images/smallest-png/openstreetmap.png"
                                    : "https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/" +
                                      participant.item0 +
                                      ".png"
                                }
                                alt=""
                                width="16"
                                height="16"
                              />
                              <img
                                src={
                                  participant.item1 === 0
                                    ? "https://www.mjt.me.uk/assets/images/smallest-png/openstreetmap.png"
                                    : "https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/" +
                                      participant.item1 +
                                      ".png"
                                }
                                alt=""
                                width="16"
                                height="16"
                              />
                              <img
                                src={
                                  participant.item2 === 0
                                    ? "https://www.mjt.me.uk/assets/images/smallest-png/openstreetmap.png"
                                    : "https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/" +
                                      participant.item2 +
                                      ".png"
                                }
                                alt=""
                                width="16"
                                height="16"
                              />
                              <img
                                src={
                                  participant.item3 === 0
                                    ? "https://www.mjt.me.uk/assets/images/smallest-png/openstreetmap.png"
                                    : "https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/" +
                                      participant.item3 +
                                      ".png"
                                }
                                alt=""
                                width="16"
                                height="16"
                              />
                              <img
                                src={
                                  participant.item4 === 0
                                    ? "https://www.mjt.me.uk/assets/images/smallest-png/openstreetmap.png"
                                    : "https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/" +
                                      participant.item4 +
                                      ".png"
                                }
                                alt=""
                                width="16"
                                height="16"
                              />
                              <img
                                src={
                                  participant.item5 === 0
                                    ? "https://www.mjt.me.uk/assets/images/smallest-png/openstreetmap.png"
                                    : "https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/" +
                                      participant.item5 +
                                      ".png"
                                }
                                alt=""
                                width="16"
                                height="16"
                              />
                              <img
                                src={
                                  participant.item6 === 0
                                    ? "https://www.mjt.me.uk/assets/images/smallest-png/openstreetmap.png"
                                    : "https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/" +
                                      participant.item6 +
                                      ".png"
                                }
                                alt=""
                                width="16"
                                height="16"
                              />
                            </div>
                          }
                        </div>
                        <div className="stat">
                          <span className="kills">{participant.kills}</span> /{" "}
                          <span className="deaths">{participant.deaths}</span> /{" "}
                          <span className="assissts">
                            {participant.assists}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                }
              }
            )}
          </div>

          <div className="champion-row">
            {data.resume.info.participants.map(
              (participant: any, index: number) => {
                if (participant.teamId === 200) {
                  return (
                    <div className="champion reverse">
                      <div className="champion-data reverse">
                        <div className="summoner-name reverse">
                          <div className="content-champ reverse ">
                            <div className="content-champ__box">
                              <img
                                src={
                                  "http://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/" +
                                  participant.championName +
                                  ".png"
                                }
                                alt=""
                                width="16"
                                height="16"
                              />
                              <div className="level reverse">
                                {participant.champLevel}
                              </div>
                            </div>
                            <div className="content-champ__info">
                              <p>{participant.summonerName}</p>
                              <div className="content-champ__info__spells reverse">
                                <div className="content-champ__info__spells--spell">
                                  <img
                                    src={
                                      "http://ddragon.leagueoflegends.com/cdn/5.9.1/img/spell/" +
                                      summonerSpells.find(
                                        (spell) =>
                                          spell.id === participant.summoner1Id
                                      )?.name +
                                      ".png"
                                    }
                                    height="16"
                                    width="16"
                                  />
                                </div>
                                <div className="content-champ__info__spells--spell">
                                  <img
                                    src={
                                      "http://ddragon.leagueoflegends.com/cdn/5.9.1/img/spell/" +
                                      summonerSpells.find(
                                        (spell) =>
                                          spell.id === participant.summoner2Id
                                      )?.name +
                                      ".png"
                                    }
                                    height="16"
                                    width="16"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items">
                          {
                            <div className="content_item">
                              <img
                                src={
                                  participant.item0 === 0
                                    ? "https://www.mjt.me.uk/assets/images/smallest-png/openstreetmap.png"
                                    : "https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/" +
                                      participant.item0 +
                                      ".png"
                                }
                                alt=""
                                width="16"
                                height="16"
                              />
                              <img
                                src={
                                  participant.item1 === 0
                                    ? "https://www.mjt.me.uk/assets/images/smallest-png/openstreetmap.png"
                                    : "https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/" +
                                      participant.item1 +
                                      ".png"
                                }
                                alt=""
                                width="16"
                                height="16"
                              />
                              <img
                                src={
                                  participant.item2 === 0
                                    ? "https://www.mjt.me.uk/assets/images/smallest-png/openstreetmap.png"
                                    : "https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/" +
                                      participant.item2 +
                                      ".png"
                                }
                                alt=""
                                width="16"
                                height="16"
                              />
                              <img
                                src={
                                  participant.item3 === 0
                                    ? "https://www.mjt.me.uk/assets/images/smallest-png/openstreetmap.png"
                                    : "https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/" +
                                      participant.item3 +
                                      ".png"
                                }
                                alt=""
                                width="16"
                                height="16"
                              />
                              <img
                                src={
                                  participant.item4 === 0
                                    ? "https://www.mjt.me.uk/assets/images/smallest-png/openstreetmap.png"
                                    : "https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/" +
                                      participant.item4 +
                                      ".png"
                                }
                                alt=""
                                width="16"
                                height="16"
                              />
                              <img
                                src={
                                  participant.item5 === 0
                                    ? "https://www.mjt.me.uk/assets/images/smallest-png/openstreetmap.png"
                                    : "https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/" +
                                      participant.item5 +
                                      ".png"
                                }
                                alt=""
                                width="16"
                                height="16"
                              />
                              <img
                                src={
                                  participant.item6 === 0
                                    ? "https://www.mjt.me.uk/assets/images/smallest-png/openstreetmap.png"
                                    : "https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/" +
                                      participant.item6 +
                                      ".png"
                                }
                                alt=""
                                width="16"
                                height="16"
                              />
                            </div>
                          }
                        </div>
                        <div className="stat">
                          <span className="kills">{participant.kills}</span> /{" "}
                          <span className="deaths">{participant.deaths}</span> /{" "}
                          <span className="assissts">
                            {participant.assists}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                }
              }
            )}
          </div>
        </div>
      </div>
    </ResumeMatchContainer>
  );
}
