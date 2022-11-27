
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
    /* max-width: 500px;
    min-width: 320px; */
    .match-date{
  align-self: flex-end;
  font-size: 15px;
  color: lightgrey;
  position: absolute;
}

.match-stats{
  align-self: center;
  margin: auto;
  color: white;
  font-size: 25px;
}

.match-details{
  display: flex;
  align-items: center;
  width: 97%;
  height: 95%;
}

.match-details-container {
/*   font-family: 'Bevan', cursive; */
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2c3e50;
}

.container {
  width: 1000px;
  height: 100%;
}

.match-container {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #fff;
}



.champion-row {
    width: 50%;
  border-right: 1px solid lightgrey;

}
.champion {
    display: flex;
}

.champion-data {
  height: 50%;
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content-champ {
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


.reverse {
  flex-direction: row-reverse;
  border-right: 0px;
  .level-reverse {
                        position: absolute;
                        left: 178px;
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

.kills {
  color: #7f8c8d;
}

.deaths {
  color: #34495e;
}

.assissts {
  color: #3498db;
}

.summoner-name {
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  width: 40%;
}

.content_item {
    display: flex;
    align-items: center;
    gap: 1px;
}
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
    background-color: #31313C;
    color: #7b7a8e;
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

  return (

    <Wrapper>
        <Container>
            <ResumeMatchContainer>
            <div className="container">
  <div className="match-details-container">
    <div className="match-details">
        <div className="result">
        {
                                    //show win or lose
                                   data.resume.info.teams[0].win
                                   ? " Victoire"
                                   : " Défaite"
                                }
        </div>
        <div className="total-kill">

        
        </div>
      <div className="match-stats">
        {
            // show time timestamp to minutes
            Math.floor(data.resume.info.gameDuration / 60) + "m " + data.resume.info.gameDuration % 60 + "s"
        }
      </div>
      <div className="result">
        {
                                    //show win or lose
                                   data.resume.info.teams[1].win
                                   ? " Victoire"
                                   : " Défaite"
                                }
        </div>
    </div>
  </div>

  <div className="match-container">
      <div className="champion-row">
    
    {data.resume.info.participants.map(
        (participant: any, index: number) => {
            if (participant.teamId === 100) {
                return (
      <div className="champion">
        <div className="champion-data">
          <div className="summoner-name">
          <div className="content-champ">
            <img src={
                                                    "http://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/" +
                                                 participant.championName +
                                                    ".png"
                                                }
                                                alt=""
                                                width="16"
                                                height="16"/>
            <div><p>{participant.summonerName}</p>
            <div className="level">{participant.champLevel}</div></div>
            </div>
            
          </div>
          <div className="items">
                {
                    <div className="content_item">
                    <img
                    src={
                        //if no item
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
          <div className="stat"><span className="kills">{participant.kills}</span> / <span className="deaths">{participant.deaths}</span> / <span className="assissts">{participant.assists}</span></div>

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
            <img src={
                                                    "http://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/" +
                                                 participant.championName +
                                                    ".png"
                                                }
                                                alt=""
                                                width="16"
                                                height="16"/>
            <div><p>{participant.summonerName}</p>
            <div className="level-reverse">{participant.champLevel}</div></div>
            </div>
          </div>
          <div className="items">
                {
                    <div className="content_item">
                    <img
                    src={
                        //if no item
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
          <div className="stat-reverse"><span className="kills">{participant.kills}</span> / <span className="deaths">{participant.deaths}</span> / <span className="assissts">{participant.assists}</span></div>
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
        </Container>
    </Wrapper>

      

    
  );
  
};



