import React, { Component } from 'react'
import management from '../asset/management1.jpg'
import innovation from '../asset/innovation.jpg'
import Pschology from '../asset/Psychology.jpg'
import self from '../asset/SelfDevelopment.jpg'
import book2 from "../asset/thought.jpg"
import religion from "../asset/Religion.jpg"
import Romance from  "../asset/Romance.jpg"
import Rom_com from "../asset/Rom-com.jpg"
import  Mystry from "../asset/Mystry.jpg"
import manga from "../asset/mANGA2.jpg"
import politic from "../asset/polics.jpg"
import horror from "../asset/Horror.jpg"
import engineering from "../asset/Engineering.jpg"
import cook from "../asset/Cook.jpg"
import children from "../asset/Children.jpg"
import Fantasy from "../asset/Fantasy.jpg"
import Literal_fiction from "../asset/Literal_fiction.jpg"
import Thriller from "../asset/Thriller.jpg"
import Apologetics from "../asset/Apologetics.jpg"
import thought from "../asset/thought.jpg"
import bible from "../asset/Bible.jpg"
import communication from "../asset/Communication1.jpg"
import "./Catelog.css"

export default class Catelog extends Component {
  render() {
    return (
      <>
        <div className='CatelogContainer'>
            <div className='catelogHero' style={{ backgroundImage: `url(${engineering})`  }}>
                <div className='catlogText'>
                    <h1>Welcome to Our Book Categories Let go On a <span>journey</span> to Acquire Knowledge</h1>
                </div>
            </div>
            <div className='CatelogContainerFlex'>
                <div className='CatelogBox ' style={{ backgroundImage: `url(${self})` }}>
                    <div className='lo'><h1>Self Devlopment Books</h1></div>
                </div>
                <div className='CatelogBox box1' style={{ backgroundImage: `url(${Pschology})` }}>
                    <div className='lo'><h1>Finance</h1></div>
                </div>
                <div className='CatelogBox  box1' style={{ backgroundImage: `url(${thought})` }}>
                    <div className='lo'><h1>History</h1></div>
                </div>
                <div className='CatelogBox ' style={{ backgroundImage: `url(${Fantasy})` }}>
                    <div className='lo'><h1>Fantasy</h1></div>
                </div>
                <div className='CatelogBox ' style={{ backgroundImage: `url(${Literal_fiction})` }}>
                    <div className='lo'><h1>Litery Fiction</h1></div>
                </div>
                <div className='CatelogBox ' style={{ backgroundImage: `url(${bible})` }}>
                    <div className='lo'><h1>Bible & Christian living</h1></div>
                </div>
                <div className='CatelogBox box1' style={{ backgroundImage: `url(${Romance})` }}>
                    <div className='lo'><h1>Romances</h1></div>
                </div>
                <div className='CatelogBox  box1' style={{ backgroundImage: `url(${Thriller})` }}>
                    <div className='lo'><h1>Thriller</h1></div>
                </div>
                <div className='CatelogBox ' style={{ backgroundImage: `url(${Mystry})` }}>
                    <div className='lo'><h1>Mystry</h1></div>
                </div>
                <div className='CatelogBox ' style={{ backgroundImage: `url(${children})` }}>
                    <div className='lo'><h1>Children Literature</h1></div>
                </div>
                <div className='CatelogBox ' style={{ backgroundImage: `url(${cook})` }}>
                    <div className='lo'><h1>Cook Book</h1></div>
                </div>
                <div className='CatelogBox ' style={{ backgroundImage: `url(${communication})` }}>
                    <div className='lo'><h1>Communication</h1></div>
                </div>
                <div className='CatelogBox box1' style={{ backgroundImage: `url(${politic})` }}>
                    <div className='lo'><h1>Politics</h1></div>
                </div>
                <div className='CatelogBox  box1' style={{ backgroundImage: `url(${religion})` }}>
                    <div className='lo'><h1>Religion</h1></div>
                </div>
                <div className='CatelogBox ' style={{ backgroundImage: `url(${manga})` }}>
                    <div className='lo'><h1>Manga</h1></div>
                </div>
                <div className='CatelogBox ' style={{ backgroundImage: `url(${Rom_com})` }}>
                    <div className='lo'><h1>Rom-Coms</h1></div>
                </div>
                <div className='CatelogBox ' style={{ backgroundImage: `url(${Apologetics})` }}>
                    <div className='lo'><h1>Apologetics</h1></div>
                </div>
                <div className='CatelogBox ' style={{ backgroundImage: `url(${horror})` }}>
                    <div className='lo'><h1>Horror</h1></div>
                </div>
            </div>
        </div>
      </>
    )
  }
}
