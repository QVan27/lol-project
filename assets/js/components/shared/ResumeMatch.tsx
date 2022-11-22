
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
.styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.styled-table thead tr {
    color: #ffffff;
    text-align: left;
}
.styled-table th,
.styled-table td {
    padding: 12px 15px;
    span {
        line-height: 2em;
    }
    .content_champion {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    margin-bottom: 0.5rem;
                    width: 12em;
                    position: relative;
                     img {
                        display: block;
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                     }
                     .level {
                        position: absolute;
                        left: -3px;
                        bottom: -3px;
                        width: 15px;
                        height: 15px;
                        background: rgb(32, 45, 55);
                        border-radius: 50%;
                        color: rgb(255, 255, 255);
                        font-size: 10px;
                        text-align: center;
                        line-height: 15px;
                        font-family: Roboto, sans-serif;
                     }

}
                }
                .content_kill {
                    margin-bottom: 0.5rem;
                }
                .content_progress {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 0.5rem;
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
                .content_item {
                    display: flex;
                    gap: 2px;
                    margin-bottom: 0.5rem;
                    width: 12em;

                }
.no_item {
    width: 16px;
    height: 16px;
    border-radius: 4px;
    background-color: #703C47;
}

.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #000
}
.styled-table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
}
`;




export default function ResumeMatch({ data }: any) {
    console.log(data);
  return (

    <Wrapper>
        <Container>
            <ResumeMatchContainer>
                <TableResumeMatch>
                    <table className="styled-table" style={{backgroundColor:"#59343B"}}>
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                        
                        <tr>
                            <td>
                                {
                                    <span> 
                                    {data.resume.info.participants.map(
                                      (participant: any, index: number) => {
                                        if (participant.teamId === 100) {
                                          return (
                                            <div className="content_champion">
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
                                              <p>{participant.summonerName}</p>
                                              <div className="level">{participant.champLevel}</div>
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
                                                if (participant.teamId === 100) {
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
                                
                                    
                                        {data.resume.info.participants.map(
                                            (participant: any, index: number) => {
                                            if (participant.teamId === 100) {
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
                                    
                                
                            </td>
                            <td>
                                {
                                    <span>
                                        {data.resume.info.participants.map(
                                            (participant: any, index: number) => {
                                            if (participant.teamId === 100) {
                                                if (participant.item0 === 0 || participant.item1 === 0 || participant.item2 === 0 || participant.item3 === 0 || participant.item4 === 0 || participant.item5 === 0 || participant.item6 === 0) {
                                                    return (
                                                       <div className="no_item"></div>
                                                    );
                                                }
                                                else {
                                                    return (
                                                        <div className="content_item">
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
                                                    )
                                                }
                                               
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
        
        }           
                    </tbody>
                    </table>
                    
                </TableResumeMatch>
                <TableResumeMatch>
                    <table className="styled-table" style={{backgroundColor:"#28344E"}}>
                    <thead>
                        <tr>
                            <th>Blue team
                                 {
                                   data.resume.info.teams[1].win
                                   ? "Victoire"
                                   : "Défaite"  
                                }
                            </th>
                            <th>KDA</th>
                            <th>Damage</th>
                            <th>Objet</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {
                                    <span> 
                                    {data.resume.info.participants.map(
                                      (participant: any, index: number) => {
                                        if (participant.teamId === 200) {
                                          return (
                                            <div className="content_champion">
                                              <img
                                                src={
                                                    "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/champion/" +
                                                    participant.championName +
                                                    ".png"
                                                }
                                                alt=""
                                                width="16"
                                                height="16"
                                              />
                                              <p>{participant.summonerName}</p>
                                              <div className="level">{participant.champLevel}</div>
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
                                                if (participant.teamId === 200) {
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
                                            if (participant.teamId === 200) {
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
                                            if (participant.teamId === 200) {
                                                if (participant.item0 !== 0 && participant.item1 !== 0 && participant.item2 !== 0 && participant.item3 !== 0 && participant.item4 !== 0 && participant.item5 !== 0 && participant.item6 !== 0) {
                                                    return (
                                                        <div className="content_item">
                                                            {
                                                                
                                                            }
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
                                            }
                                        )}
                                    </span>
                                }
                            </td>
                            <td>
                                {
                                    <span>
                                        {/* score & classement */}
                                        {data.resume.info.participants.map(
                                            (participant: any, index: number) => {
                                            if (participant.teamId === 200) {
                                                return (
                                                    <div className="ranking">
                                                        {/* show rankig */}
                                                        <p>{participant.highestAchievedSeasonTier}</p>

                                                        
                                                        
                                                    </div>
                                                 
                                                 

                                                );
                                            }
                                            }
                                        )}

                                    </span>
                                }
                                
                               
                            </td>
                        
                            

                        </tr>
                    </tbody>
                    </table>
                
                </TableResumeMatch>
            </ResumeMatchContainer>
        </Container>
    </Wrapper>

      

    
  );
  
};



