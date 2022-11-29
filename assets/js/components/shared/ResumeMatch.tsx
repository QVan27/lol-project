
import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
  margin-inline: auto;
  width: min(1140px, 92%);
  @media screen and (min-width: 320px) and (max-width: 786px) {
    width: unset;
  }

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
  padding: 15px 20px 15px 20px;
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
  padding: 20px 20px 20px 20px;
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
  width: 100%;
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
  .level-reverse {
                        position: absolute;
                        left: 164px;
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

//responsive card resume match
@media screen and (min-width: 320px) and (max-width: 786px) {
    .container {
        width: 90%;
    .match-container {
        flex-direction: column;
        padding: 20px 15px 20px 15px;

        .champion-row {
            width: 100%;
            border-right: none;
            border-bottom: 1px solid lightgrey;
        }
    }

    .match-details-container {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 15px 15px 15px 15px;

        .match-stats {
            font-size: 20px;

            .match-stats-item {
                font-size: 15px;

                .match-stats-item-value {
                    font-size: 12px;
                }
            }
        }
    }

    .match-details {
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .champion-row {
            width: 100%;
            border-right: none;
            border-bottom: 1px solid lightgrey;

            .champion {
                flex-direction: column;
                align-items: center;
                justify-content: center;

                .champion-data {
                        display: grid; 
                        grid-auto-columns: 1fr; 
                        grid-template-columns: 1fr 1fr; 
                        grid-template-rows: 1fr 1fr; 
                        gap: 0px 0px; 
                        grid-template-areas: 
                            "summoner-name summoner-name"
                            "items stat"; 
                            .summoner-name { 
                                grid-area: summoner-name;
                                .content-champ {
                                    flex-direction: column;
                                    align-items: center;
                                    justify-content: center;
            
                                    .level {
                                        position: absolute;
                                        left: 0;
                                        bottom: 0;
                                        width: 15px;
                                        height: 15px;
                                        background: rgb(32, 45, 55);
                                        border-radius: 50%;
                                        color: rgb(255, 255, 255);
                                        font-size: 10px;
                                        text-align: center;
                                        line-height: 15px;
                                        font-family: Roboto, sans-serif;
            
                                        .level-reverse {
                                            position: absolute;
                                            left: 0;
                                            bottom: 0;
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
                            
                            }
                            .items { grid-area: items; }
                            .stat { grid-area: stat; }
                        }

                }
            }
        }
    }
 }

`;



export default function ResumeMatch({ data }: any) {
    console.log(data);

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



