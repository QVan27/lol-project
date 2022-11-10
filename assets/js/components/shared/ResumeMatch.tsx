
import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
  margin-inline: auto;
  width: min(1140px, 92%);
`;

const Container = styled.div`
  display: grid;
  place-items: center;
`;

const ResumeMatchContainer = styled.div`
    position: relative;
    max-width: 500px;
    min-width: 320px;
`;

const TableResumeMatch = styled.table`
    width: 100%;
    border-collapse: collapse;
    border: 1px solid black;
    text-align: center;
    font-size: 0.8rem;
    font-weight: 600;
    color: #fff;
    border-radius: 5px;
    background-color: #59343B;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin-bottom: 1rem;
    thead { 
        tr {
            th {
                padding: 0.5rem;
            }
        }
    }
    tbody {
        tr {
            td {
                /* padding: 0.5rem; */
                width: 50%;
                .content_champion {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 0.5rem;
                }
                .content_kill {
                    margin-bottom: 0.5rem;
                }
                .content_progress {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    .progress_damage {
                        width: 50px;
                        height: 6px;
                        margin: 4px auto 0px;
                        background-color: #e0e0e0;
                        .progress_bar {
                            height: 100%;
                            background-color: #f00;
                        }
                    }

                }

            }
        }
    }
`;




export default function ResumeMatch({ data }: any) {
    // console.log(data);
  return (

    <Wrapper>
        <Container>
            <ResumeMatchContainer>
                <TableResumeMatch>
                    <thead>
                        <tr>
                            <th>REd Team
                            {
                                    //show win or lose
                                   data.resume.info.teams[0].win
                                   ? "Victoire"
                                   : "Défaite"
                                
                                                  
                          
                                  
                                }
                            </th>
                            <th>KDA</th>
                            <th>Damage</th>
                            <th>Objet utilisés</th>
                            <th>Sorts</th>
                            <th>Runes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {
                                    <span> 
                                    {data.resume.info.participants.map(
                                      (participant: any, index: number) => {
                                        if (index < 5) {
                                          // console.log(participant);
                                          return (
                                            <div className="content_champion">
                                              <img
                                                src={
                                                  "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" +
                                                  participant.item0 +
                                                  ".png"
                                                }
                                                alt=""
                                                width="16"
                                                height="16"
                                              />
                                              <p>{participant.summonerName}</p>
                                            </div>
                                          );
                                        }
                                      }
                                    )}
                                  </span>
                                }
                            </td>
                            <td>
                                {
                                    <span>
                                        {data.resume.info.participants.map(
                                            (participant: any, index: number) => {
                                                if (index < 5) {
                                            // console.log(participant);
                                                return (
                                                    <div className="content_kill">
                                                        <p>{participant.kills}/{participant.deaths}/{participant.assists}</p>
                                                    </div>
                                                );
                                                }
                                            }
                                            )}
                                    </span> 
                                }
                            </td>
                            <td>
                                {
                                    <span>
                                        {data.resume.info.participants.map(
                                            (participant: any, index: number) => {
                                            if (index < 5) {
                                                // console.log(participant);
                                                return (
                                                        <div className="content_progress">
                                                            <div className="progress_damage_tochampion">
                                                            <p>{participant.totalDamageDealtToChampions}</p>
                                                            <div className="progress_damage">
                                                                <div className="progress_bar" style={{width: participant.totalDamageDealtToChampions / 1000 + "%"}}></div>
                                                            </div>
                                                            </div>
                                                            <div className="progress_damage_taken">
                                                            <p>{participant.totalDamageTaken}</p>
                                                            <div className="progress_damage">
                                                                <div className="progress_bar" style={{width: participant.totalDamageTaken / 1000 + "%"}}></div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                );
                                            }
                                            }
                                        )}
                                    </span>
                                }
                            </td>
                            <td>
                                {
                                    <span>
                                        {data.resume.info.participants.map(
                                            (participant: any, index: number) => {
                                            if (index < 5) {
                                                // console.log(participant);
                                                return (
                                                <div>
                                                    <img
                                                    src={
                                                        "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" +
                                                        participant.item0 +
                                                        ".png"
                                                    }
                                                    alt=""
                                                    width="16"
                                                    height="16"
                                                    />
                                                    <img
                                                    src={
                                                        "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" +
                                                        participant.item1 +
                                                        ".png"
                                                    }
                                                    alt=""
                                                    width="16"
                                                    height="16"
                                                    />
                                                    <img
                                                    src={
                                                        "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" +
                                                        participant.item2 +
                                                        ".png"
                                                    }
                                                    alt=""
                                                    width="16"
                                                    height="16"
                                                    />
                                                    <img
                                                    src={
                                                        "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" +
                                                        participant.item3 +
                                                        ".png"
                                                    }
                                                    alt=""
                                                    width="16"
                                                    height="16"
                                                    />
                                                    <img
                                                    src={
                                                        "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" +
                                                        participant.item4 +
                                                        ".png"
                                                    }
                                                    alt=""
                                                    width="16"
                                                    height="16"
                                                    />
                                                    <img
                                                    src={
                                                        "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" +
                                                        participant.item5 +
                                                        ".png"
                                                    }
                                                    alt=""
                                                    width="16"
                                                    height="16"
                                                    />
                                                    <img
                                                    src={
                                                        "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" +
                                                        participant.item6 +
                                                        ".png"
                                                    }
                                                    alt=""
                                                    width="16"
                                                    height="16"
                                                    />
                                                </div>
                                                );
                                            }
                                            }
                                        )}
                                    </span>
                                }
                            </td>
                            <td>
                                
                            </td>
                            <td>
                              
                            </td>
                           

                        </tr>
                    </tbody>
                </TableResumeMatch>
                <TableResumeMatch>
                <thead>
                        <tr>
                            <th>Blue team
                                 {
                                    //show win or lose
                                   data.resume.info.teams[1].win
                                   ? "Victoire"
                                   : "Défaite"  
                                
                                                  
                          
                                  
                                }
                                
                                
                            </th>
                            <th>KDA</th>
                            <th>Damage</th>
                            <th>Objet</th>
                            <th>Sorts</th>
                            <th>Runes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {
                                    <span> 
                                    {data.resume.info.participants.map(
                                      (participant: any, index: number) => {
                                        if (index > 5) {
                                          // console.log(participant);
                                          return (
                                            <div className="content_champion">
                                              <img
                                                src={
                                                  "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" +
                                                  participant.item0 +
                                                  ".png"
                                                }
                                                alt=""
                                                width="16"
                                                height="16"
                                              />
                                              <p>{participant.summonerName}</p>
                                            </div>
                                          );
                                        }
                                      }
                                    )}
                                  </span>
                                }
                            </td>
                            <td>
                                {
                                    <span>
                                        {data.resume.info.participants.map(
                                            (participant: any, index: number) => {
                                                if (index > 5) {
                                            // console.log(participant);
                                                return (
                                                    <div className="content_kill">
                                                        <p>{participant.kills}/{participant.deaths}/{participant.assists}</p>
                                                    </div>
                                                );
                                                }
                                            }
                                            )}
                                    </span> 
                                }
                            </td>
                            <td>
                                {
                                    <span>
                                        {data.resume.info.participants.map(
                                            (participant: any, index: number) => {
                                            if (index > 5) {
                                                // console.log(participant);
                                                return (
                                                        <div className="content_progress">
                                                            <div className="progress_damage_tochampion">
                                                            <p>{participant.totalDamageDealtToChampions}</p>
                                                            <div className="progress_damage">
                                                                <div className="progress_bar" style={{width: participant.totalDamageDealtToChampions / 1000 + "%"}}></div>
                                                            </div>
                                                            </div>
                                                            <div className="progress_damage_taken">
                                                            <p>{participant.totalDamageTaken}</p>
                                                            <div className="progress_damage">
                                                                <div className="progress_bar" style={{width: participant.totalDamageTaken / 1000 + "%"}}></div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                );
                                            }
                                            }
                                        )}
                                    </span>
                                }
                            </td>
                            <td>
                                {
                                    <span>
                                        {data.resume.info.participants.map(
                                            (participant: any, index: number) => {
                                            if (index > 5) {
                                                // console.log(participant);
                                                return (
                                                <div>
                                                    <img
                                                    src={
                                                        "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" +
                                                        participant.item0 +
                                                        ".png"
                                                    }
                                                    alt=""
                                                    width="16"
                                                    height="16"
                                                    />
                                                    <img
                                                    src={
                                                        "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" +
                                                        participant.item1 +
                                                        ".png"
                                                    }
                                                    alt=""
                                                    width="16"
                                                    height="16"
                                                    />
                                                    <img
                                                    src={
                                                        "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" +
                                                        participant.item2 +
                                                        ".png"
                                                    }
                                                    alt=""
                                                    width="16"
                                                    height="16"
                                                    />
                                                    <img
                                                    src={
                                                        "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" +
                                                        participant.item3 +
                                                        ".png"
                                                    }
                                                    alt=""
                                                    width="16"
                                                    height="16"
                                                    />
                                                    <img
                                                    src={
                                                        "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" +
                                                        participant.item4 +
                                                        ".png"
                                                    }
                                                    alt=""
                                                    width="16"
                                                    height="16"
                                                    />
                                                    <img
                                                    src={
                                                        "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" +
                                                        participant.item5 +
                                                        ".png"
                                                    }
                                                    alt=""
                                                    width="16"
                                                    height="16"
                                                    />
                                                    <img
                                                    src={
                                                        "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" +
                                                        participant.item6 +
                                                        ".png"
                                                    }
                                                    alt=""
                                                    width="16"
                                                    height="16"
                                                    />
                                                </div>
                                                );
                                            }
                                            }
                                        )}
                                    </span>
                                }
                            </td>
                            <td>
                               
                            </td>
                        
                            

                        </tr>
                    </tbody>
                </TableResumeMatch>

            </ResumeMatchContainer>
        </Container>
    </Wrapper>

      

    
  );
  
};



