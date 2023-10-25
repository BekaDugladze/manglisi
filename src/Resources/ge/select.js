import React, { Component } from "react";
import './css/select.css';
import ma from "../img/ma.jpg";
import fts from "../img/436.png";
import fot from "../img/513.png";
import three from "../img/536.png";
import four from "../img/545.png";
import five from "../img/547.png";
import six from "../img/587.png";
import sev from "../img/62.png";
import eig from "../img/64.png";
import nin from "../img/724.png";
import ten from "../img/777.png";
import ele from "../img/825.png";

export default class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            binaimg: 'default',
            karkasi: 'შავი',
            sartuli: '',
            fasi: 0,
            bina: '',
            shavi: 850,
            tetri: 1000,
            bina436: [
                    {
                        img: fts,
                        fasi: '37060',
                        fasiTetri: '43600',
                        sartuli: '1',
                        kvadrati: 43.6,
                        mdgomareoba: 'gayiduli'
                    },
                    {
                        img: fts,
                        fasi: '37060',
                        fasiTetri: '43600',
                        sartuli: '2',
                        kvadrati: 43.6,
                        mdgomareoba: ''
                    },
                    {
                        img: fts,
                        fasi: '37060',
                        fasiTetri: '43600',
                        sartuli: '3',
                        kvadrati: 43.6,
                        mdgomareoba: ''
                    },
                    {
                        img: fts,
                        fasi: '37060',
                        fasiTetri: '43600',
                        sartuli: '4',
                        kvadrati: 43.6,
                        mdgomareoba: ''
                    }
            ],
            bina513: [
                {
                    img: fot,
                    fasi: '43605',
                    fasiTetri: '51300',
                    sartuli: '1',
                    kvadrati: 51.3,
                    mdgomareoba: 'gayiduli'
                },
                {
                    img: fot,
                    fasi: '43605',
                    fasiTetri: '51300',
                    sartuli: '2',
                    kvadrati: 51.3,
                    mdgomareoba: ''
                },
                {
                    img: fot,
                    fasi: '43605',
                    fasiTetri: '51300',
                    sartuli: '3',
                    kvadrati: 51.3,
                    mdgomareoba: ''
                },
                {
                    img: fot,
                    fasi: '43605',
                    fasiTetri: '51300',
                    sartuli: '4',
                    kvadrati: 51.3,
                    mdgomareoba: 'gayiduli'
                }
            ],
            bina536: [
                {
                    img: three,
                    fasi: '45560',
                    fasiTetri: '53600',
                    kvadrati: 53.6,
                    sartuli: '1',
                    mdgomareoba: 'gayiduli'
                },
                {
                    img: three,
                    fasi: '43605',
                    fasiTetri: '53600',
                    kvadrati: 53.6,
                    sartuli: '2',
                    mdgomareoba: ''
                },
                {
                    img: three,
                    fasi: '43605',
                    fasiTetri: '53600',
                    kvadrati: 53.6,
                    sartuli: '3',
                    mdgomareoba: 'gayiduli'
                },
                {
                    img: three,
                    fasi: '43605',
                    fasiTetri: '53600',
                    kvadrati: 53.6,
                    sartuli: '4',
                    mdgomareoba: ''
                }
            ],
            bina545: [
                {
                    img: four,
                    fasi: '46325',
                    fasiTetri: '54500',
                    kvadrati: 54.5,
                    sartuli: '1',
                    mdgomareoba: ''
                },
                {
                    img: four,
                    fasi: '46325',
                    fasiTetri: '54500',
                    kvadrati: 54.5,
                    sartuli: '2',
                    mdgomareoba: ''
                },
                {
                    img: four,
                    fasi: '46325',
                    fasiTetri: '54500',
                    kvadrati: 54.5,
                    sartuli: '3',
                    mdgomareoba: 'gayiduli'
                },
                {
                    img: four,
                    fasi: '46325',
                    fasiTetri: '54500',
                    kvadrati: 54.5,
                    sartuli: '4',
                    mdgomareoba: ''
                }
            ],
            bina547: [
                {
                    img: five,
                    fasi: '46495',
                    fasiTetri: '54700',
                    kvadrati: 54.7,
                    sartuli: '1',
                    mdgomareoba: 'gayiduli'
                },
                {
                    img: five,
                    fasi: '46495',
                    fasiTetri: '54700',
                    kvadrati: 54.7,
                    sartuli: '2',
                    mdgomareoba: ''
                },
                {
                    img: five,
                    fasi: '46495',
                    fasiTetri: '54700',
                    kvadrati: 54.7,
                    sartuli: '3',
                    mdgomareoba: 'gayiduli'
                },
                {
                    img: five,
                    fasi: '46495',
                    fasiTetri: '54700',
                    kvadrati: 54.7,
                    sartuli: '4',
                    mdgomareoba: ''
                }
            ],
            bina587: [
                {
                    img: six,
                    fasi: '49895',
                    fasiTetri: '58700',
                    kvadrati: 58.7,
                    sartuli: '1',
                    mdgomareoba: ''
                },
                {
                    img: six,
                    fasi: '49895',
                    fasiTetri: '58700',
                    kvadrati: 58.7,
                    sartuli: '2',
                    mdgomareoba: ''
                },
                {
                    img: six,
                    fasi: '49895',
                    fasiTetri: '58700',
                    kvadrati: 58.7,
                    sartuli: '3',
                    mdgomareoba: ''
                },
                {
                    img: six,
                    fasi: '49895',
                    fasiTetri: '58700',
                    kvadrati: 58.7,
                    sartuli: '4',
                    mdgomareoba: ''
                }
            ],
            bina62: [
                {
                    img: sev,
                    fasi: '52700',
                    fasiTetri: '62000',
                    kvadrati: 62,
                    sartuli: '1',
                    mdgomareoba: 'gayiduli'
                },
                {
                    img: sev,
                    fasi: '52700',
                    fasiTetri: '62000',
                    kvadrati: 62,
                    sartuli: '2',
                    mdgomareoba: ''
                },
                {
                    img: sev,
                    fasi: '52700',
                    fasiTetri: '62000',
                    kvadrati: 62,
                    sartuli: '3',
                    mdgomareoba: 'gayiduli'
                },
                {
                    img: sev,
                    fasi: '52700',
                    fasiTetri: '62000',
                    kvadrati: 62,
                    sartuli: '4',
                    mdgomareoba: ''
                }
            ],
            bina64: [
                {
                    img: eig,
                    fasi: '54400',
                    fasiTetri: '64000',
                    kvadrati: 64,
                    sartuli: '1',
                    mdgomareoba: ''
                },
                {
                    img: eig,
                    fasi: '54400',
                    fasiTetri: '64000',
                    kvadrati: 64,
                    sartuli: '2',
                    mdgomareoba: 'gayiduli'
                },
                {
                    img: eig,
                    fasi: '54400',
                    fasiTetri: '64000',
                    kvadrati: 64,
                    sartuli: '3',
                    mdgomareoba: 'gayiduli'
                },
                {
                    img: eig,
                    fasi: '54400',
                    fasiTetri: '64000',
                    kvadrati: 64,
                    sartuli: '4',
                    mdgomareoba: ''
                }
            ],
            bina724: [
                {
                    img: nin,
                    fasi: '61370',
                    fasiTetri: '72400',
                    kvadrati: 72.4,
                    sartuli: '1',
                    mdgomareoba: ''
                },
                {
                    img: nin,
                    fasi: '61370',
                    fasiTetri: '72400',
                    kvadrati: 72.4,
                    sartuli: '2',
                    mdgomareoba: ''
                },
                {
                    img: nin,
                    fasi: '61370',
                    fasiTetri: '72400',
                    kvadrati: 72.4,
                    sartuli: '3',
                    mdgomareoba: 'gayiduli'
                },
                {
                    img: nin,
                    fasi: '61370',
                    fasiTetri: '72400',
                    kvadrati: 72.4,
                    sartuli: '4',
                    mdgomareoba: ''
                }
            ],
            bina777: [
                {
                    img: ten,
                    fasi: '66045',
                    fasiTetri: '77700',
                    kvadrati: 77.7,
                    sartuli: '1',
                    mdgomareoba: ''
                },
                {
                    img: ten,
                    fasi: '66045',
                    fasiTetri: '77700',
                    kvadrati: 77.7,
                    sartuli: '2',
                    mdgomareoba: ''
                },
                {
                    img: ten,
                    fasi: '66045',
                    fasiTetri: '77700',
                    kvadrati: 77.7,
                    sartuli: '3',
                    mdgomareoba: 'gayiduli'
                },
                {
                    img: ten,
                    fasi: '66045',
                    fasiTetri: '77700',
                    kvadrati: 77.7,
                    sartuli: '4',
                    mdgomareoba: ''
                }
            ],
            bina825: [
                {
                    img: ele,
                    fasi: '60125',
                    fasiTetri: '82500',
                    kvadrati: 82.5,
                    sartuli: '1',
                    mdgomareoba: ''
                },
                {
                    img: ele,
                    fasi: '60125',
                    fasiTetri: '82500',
                    kvadrati: 82.5,
                    sartuli: '2',
                    mdgomareoba: ''
                },
                {
                    img: ele,
                    fasi: '60125',
                    fasiTetri: '82500',
                    kvadrati: 82.5,
                    sartuli: '3',
                    mdgomareoba: ''
                },
                {
                    img: ele,
                    fasi: '60125',
                    fasiTetri: '82500',
                    kvadrati: 82.5,
                    sartuli: '4',
                    mdgomareoba: 'gayiduli'
                }
            ]
        }
    }
    sartuli(tab) {
        this.setState({sartuli: tab});
    }
    clearSartuli(){
        this.setState({sartuli: ''})
    }
    bina(but){
        this.setState({bina: but, binaimg: but});
    }
    clearBina(){
        this.setState({bina: '', binaimg: 'default'});
    }
    handleKarkasi(){
        this.setState({karkasi: 'თეთრი'});
    }
    handleKarkasiOne(){
        this.setState({karkasi: 'შავი'});
    }
    
    render(){
        return(
            <div className="select" id="select">
                <h1>შეარჩიე სასურველი ბინა</h1>
                <div className="floor">
                    <h2>სართული</h2>
                    <button 
                    onClick={() => {this.sartuli('1')}}
                    style={{
                        color: this.state.sartuli === '1' ? 'white' : '#486243',
                        background: this.state.sartuli === '1' ? '#486243' : 'none'
                        }}
                    >1</button>
                    <button 
                    onClick={() => {this.sartuli('2')}}
                    style={{
                        color: this.state.sartuli === '2' ? 'white' : '#486243',
                        background: this.state.sartuli === '2' ? '#486243' : 'none'
                        }}
                    >2</button>
                    <button
                    onClick={() => {this.sartuli('3')}}
                    style={{
                        color: this.state.sartuli === '3' ? 'white' : '#486243',
                        background: this.state.sartuli === '3' ? '#486243' : 'none'
                        }}
                    >3</button>
                    <button
                    onClick={() => {this.sartuli('4')}}
                    style={{
                        color: this.state.sartuli === '4' ? 'white' : '#486243',
                        background: this.state.sartuli === '4' ? '#486243' : 'none'
                        }}
                    >4</button>
                </div>
                
                <button className="clear" onClick={() => {this.clearSartuli()}}>Clear</button>
                <div className="bina">
                    <h3>კვადრატი</h3>
                    <div className="1km">
                        <button
                        onClick={() => {this.bina('but1')}}
                        style={{
                            color: this.state.bina === 'but1' ? 'white' : '#486243',
                            background: this.state.bina === 'but1' ? '#486243' : 'none'
                            }}
                        >43,6</button>
                        <button
                        onClick={() => {this.bina('but2')}}
                        style={{
                            color: this.state.bina === 'but2' ? 'white' : '#486243',
                            background: this.state.bina === 'but2' ? '#486243' : 'none'
                            }}
                        >51,3</button>
                        <button
                        onClick={() => {this.bina('but3')}}
                        style={{
                            color: this.state.bina === 'but3' ? 'white' : '#486243',
                            background: this.state.bina === 'but3' ? '#486243' : 'none'
                            }}
                        >53,6</button>
                        <button
                        onClick={() => {this.bina('but4')}}
                        style={{
                            color: this.state.bina === 'but4' ? 'white' : '#486243',
                            background: this.state.bina === 'but4' ? '#486243' : 'none'
                            }}
                        >54,5</button>
                        <button
                        onClick={() => {this.bina('but5')}}
                        style={{
                            color: this.state.bina === 'but5' ? 'white' : '#486243',
                            background: this.state.bina === 'but5' ? '#486243' : 'none'
                            }}
                        >54,7</button>
                    </div>
                    <div className="2km">
                        <button
                        onClick={() => {this.bina('but6')}}
                        style={{
                            color: this.state.bina === 'but6' ? 'white' : '#486243',
                            background: this.state.bina === 'but6' ? '#486243' : 'none'
                            }}
                        >58,7</button>
                        <button
                        onClick={() => {this.bina('but7')}}
                        style={{
                            color: this.state.bina === 'but7' ? 'white' : '#486243',
                            background: this.state.bina === 'but7' ? '#486243' : 'none'
                            }}
                        >62</button>
                        <button
                        onClick={() => {this.bina('but8')}}
                        style={{
                            color: this.state.bina === 'but8' ? 'white' : '#486243',
                            background: this.state.bina === 'but8' ? '#486243' : 'none'
                            }}
                        >64</button>
                        <button
                        onClick={() => {this.bina('but9')}}
                        style={{
                            color: this.state.bina === 'but9' ? 'white' : '#486243',
                            background: this.state.bina === 'but9' ? '#486243' : 'none'
                            }}
                        >72,4</button>
                        <button
                        onClick={() => {this.bina('but10')}}
                        style={{
                            color: this.state.bina === 'but10' ? 'white' : '#486243',
                            background: this.state.bina === 'but10' ? '#486243' : 'none'
                            }}
                        >77,7</button>
                        <button
                        onClick={() => {this.bina('but11')}}
                        style={{
                            color: this.state.bina === 'but11' ? 'white' : '#486243',
                            background: this.state.bina === 'but11' ? '#486243' : 'none'
                            }}
                        >82,5</button>
                    </div>
                </div>
                    <button className="clear" onClick={() => {this.clearBina()}}>Clear</button>
                <div>
                    {this.state.binaimg === 'default' ? 
                    <div className="default">
                        <img src={ma} alt="manglisi Inn" />
                    </div>
                    : <div>
                        {this.state.bina === 'but1' && (
                            <div className="binebi">
                                {this.state.bina436
                                .filter(item => this.state.sartuli === '' ? item.sartuli : item.sartuli === this.state.sartuli)
                                .map((item, index) => 
                                (<div className="binaDiv" key={index}>
                                    <img src={item.img} alt="Manglisi Inn მანგილისი ინნ"/>
                                    <div className="info">
                                        <button className="shavi" onClick={() => this.handleKarkasiOne()}>შავი კარკასი</button>
                                        <button className="tetri" onClick={() => this.handleKarkasi()}>თეთრი კარკასი</button>
                                        <h2>{this.state.karkasi} კარკასი</h2>
                                        <p>სართული: {item.sartuli}</p>
                                        <p>კვადრატი: {item.kvadrati}</p>
                                        <p>ფასი: 
                                            {this.state.karkasi === 'შავი' ? <p>{this.state.shavi}</p> : <p>{this.state.tetri}</p>}
                                        $ მ2</p>
                                        <p>სულ: {this.state.karkasi === 'შავი' ? <p>{item.fasi}</p> : <p>{item.fasiTetri}</p>}$</p>
                                        {item.mdgomareoba === '' ? <a href="#kontakti">შეიძინე ახლავე</a> : <p className={item.mdgomareoba}>გაყიდულია</p>}
                                    </div>
                                </div>))}
                            </div>
                        )}
                        {this.state.bina === 'but2' && (
                            <div className="binebi">
                                {this.state.bina513
                                .filter(item => this.state.sartuli === '' ? item.sartuli : item.sartuli === this.state.sartuli)
                                .map((item, index) => 
                                (<div className="binaDiv" key={index}>
                                    <img src={item.img}  alt="Manglisi Inn მანგილისი ინნ"/>
                                    <div className="info">
                                        <button className="shavi" onClick={() => this.handleKarkasiOne()}>შავი კარკასი</button>
                                        <button className="tetri" onClick={() => this.handleKarkasi()}>თეთრი კარკასი</button>
                                        <h2>{this.state.karkasi} კარკასი</h2>
                                        <p>სართული: {item.sartuli}</p>
                                        <p>კვადრატი: {item.kvadrati}</p>
                                        <p>ფასი: 
                                            {this.state.karkasi === 'შავი' ? <p>{this.state.shavi}</p> : <p>{this.state.tetri}</p>}
                                        $ მ2</p>
                                        <p>სულ: {this.state.karkasi === 'შავი' ? <p>{item.fasi}</p> : <p>{item.fasiTetri}</p>}$</p>
                                        {item.mdgomareoba === '' ? <a href="#kontakti">შეიძინე ახლავე</a> : <p className={item.mdgomareoba}>გაყიდულია</p>}
                                    </div>
                                </div>))}
                            </div>
                        )}
                        {this.state.bina === 'but3' && (
                            <div className="binebi">
                                {this.state.bina536
                                .filter(item => this.state.sartuli === '' ? item.sartuli : item.sartuli === this.state.sartuli)
                                .map((item, index) => 
                                (<div className="binaDiv" key={index}>
                                    <img src={item.img}  alt="Manglisi Inn მანგილისი ინნ"/>
                                    <div className="info">
                                        <button className="shavi" onClick={() => this.handleKarkasiOne()}>შავი კარკასი</button>
                                        <button className="tetri" onClick={() => this.handleKarkasi()}>თეთრი კარკასი</button>
                                        <h2>{this.state.karkasi} კარკასი</h2>
                                        <p>სართული: {item.sartuli}</p>
                                        <p>კვადრატი: {item.kvadrati}</p>
                                        <p>ფასი: 
                                            {this.state.karkasi === 'შავი' ? <p>{this.state.shavi}</p> : <p>{this.state.tetri}</p>}
                                        $ მ2</p>
                                        <p>სულ: {this.state.karkasi === 'შავი' ? <p>{item.fasi}</p> : <p>{item.fasiTetri}</p>}$</p>
                                        {item.mdgomareoba === '' ? <a href="#kontakti">შეიძინე ახლავე</a> : <p className={item.mdgomareoba}>გაყიდულია</p>}
                                    </div>
                                </div>))}
                            </div>
                        )}
                        {this.state.bina === 'but4' && (
                            <div className="binebi">
                                {this.state.bina545
                                .filter(item => this.state.sartuli === '' ? item.sartuli : item.sartuli === this.state.sartuli)
                                .map((item, index) => 
                                (<div className="binaDiv" key={index}>
                                    <img src={item.img}  alt="Manglisi Inn მანგილისი ინნ"/>
                                    <div className="info">
                                        <button className="shavi" onClick={() => this.handleKarkasiOne()}>შავი კარკასი</button>
                                        <button className="tetri" onClick={() => this.handleKarkasi()}>თეთრი კარკასი</button>
                                        <h2>{this.state.karkasi} კარკასი</h2>
                                        <p>სართული: {item.sartuli}</p>
                                        <p>კვადრატი: {item.kvadrati}</p>
                                        <p>ფასი: 
                                            {this.state.karkasi === 'შავი' ? <p>{this.state.shavi}</p> : <p>{this.state.tetri}</p>}
                                        $ მ2</p>
                                        <p>სულ: {this.state.karkasi === 'შავი' ? <p>{item.fasi}</p> : <p>{item.fasiTetri}</p>}$</p>
                                        {item.mdgomareoba === '' ? <a href="#kontakti">შეიძინე ახლავე</a> : <p className={item.mdgomareoba}>გაყიდულია</p>}
                                    </div>
                                </div>))}
                            </div>
                        )}
                        {this.state.bina === 'but5' && (
                            <div className="binebi">
                                {this.state.bina547
                                .filter(item => this.state.sartuli === '' ? item.sartuli : item.sartuli === this.state.sartuli)
                                .map((item, index) => 
                                (<div className="binaDiv" key={index}>
                                    <img src={item.img}  alt="Manglisi Inn მანგილისი ინნ"/>
                                    <div className="info">
                                        <button className="shavi" onClick={() => this.handleKarkasiOne()}>შავი კარკასი</button>
                                        <button className="tetri" onClick={() => this.handleKarkasi()}>თეთრი კარკასი</button>
                                        <h2>{this.state.karkasi} კარკასი</h2>
                                        <p>სართული: {item.sartuli}</p>
                                        <p>კვადრატი: {item.kvadrati}</p>
                                        <p>ფასი: 
                                            {this.state.karkasi === 'შავი' ? <p>{this.state.shavi}</p> : <p>{this.state.tetri}</p>}
                                        $ მ2</p>
                                        <p>სულ: {this.state.karkasi === 'შავი' ? <p>{item.fasi}</p> : <p>{item.fasiTetri}</p>}$</p>
                                        {item.mdgomareoba === '' ? <a href="#kontakti">შეიძინე ახლავე</a> : <p className={item.mdgomareoba}>გაყიდულია</p>}
                                    </div>
                                </div>))}
                            </div>
                        )}
                        {this.state.bina === 'but6' && (
                            <div className="binebi">
                                {this.state.bina587
                                .filter(item => this.state.sartuli === '' ? item.sartuli : item.sartuli === this.state.sartuli)
                                .map((item, index) => 
                                (<div className="binaDiv" key={index}>
                                    <img src={item.img}  alt="Manglisi Inn მანგილისი ინნ"/>
                                    <div className="info">
                                        <button className="shavi" onClick={() => this.handleKarkasiOne()}>შავი კარკასი</button>
                                        <button className="tetri" onClick={() => this.handleKarkasi()}>თეთრი კარკასი</button>
                                        <h2>{this.state.karkasi} კარკასი</h2>
                                        <p>სართული: {item.sartuli}</p>
                                        <p>კვადრატი: {item.kvadrati}</p>
                                        <p>ფასი: 
                                            {this.state.karkasi === 'შავი' ? <p>{this.state.shavi}</p> : <p>{this.state.tetri}</p>}
                                        $ მ2</p>
                                        <p>სულ: {this.state.karkasi === 'შავი' ? <p>{item.fasi}</p> : <p>{item.fasiTetri}</p>}$</p>
                                        {item.mdgomareoba === '' ? <a href="#kontakti">შეიძინე ახლავე</a> : <p className={item.mdgomareoba}>გაყიდულია</p>}
                                    </div>
                                </div>))}
                            </div>
                        )}
                        {this.state.bina === 'but7' && (
                            <div className="binebi">
                                {this.state.bina62
                                .filter(item => this.state.sartuli === '' ? item.sartuli : item.sartuli === this.state.sartuli)
                                .map((item, index) => 
                                (<div className="binaDiv" key={index}>
                                    <img src={item.img}  alt="Manglisi Inn მანგილისი ინნ"/>
                                    <div className="info">
                                        <button className="shavi" onClick={() => this.handleKarkasiOne()}>შავი კარკასი</button>
                                        <button className="tetri" onClick={() => this.handleKarkasi()}>თეთრი კარკასი</button>
                                        <h2>{this.state.karkasi} კარკასი</h2>
                                        <p>სართული: {item.sartuli}</p>
                                        <p>კვადრატი: {item.kvadrati}</p>
                                        <p>ფასი: 
                                            {this.state.karkasi === 'შავი' ? <p>{this.state.shavi}</p> : <p>{this.state.tetri}</p>}
                                        $ მ2</p>
                                        <p>სულ: {this.state.karkasi === 'შავი' ? <p>{item.fasi}</p> : <p>{item.fasiTetri}</p>}$</p>
                                        {item.mdgomareoba === '' ? <a href="#kontakti">შეიძინე ახლავე</a> : <p className={item.mdgomareoba}>გაყიდულია</p>}
                                    </div>
                                </div>))}
                            </div>
                        )}
                        {this.state.bina === 'but8' && (
                            <div className="binebi">
                                {this.state.bina64
                                .filter(item => this.state.sartuli === '' ? item.sartuli : item.sartuli === this.state.sartuli)
                                .map((item, index) => 
                                (<div className="binaDiv" key={index}>
                                    <img src={item.img}  alt="Manglisi Inn მანგილისი ინნ"/>
                                    <div className="info">
                                        <button className="shavi" onClick={() => this.handleKarkasiOne()}>შავი კარკასი</button>
                                        <button className="tetri" onClick={() => this.handleKarkasi()}>თეთრი კარკასი</button>
                                        <h2>{this.state.karkasi} კარკასი</h2>
                                        <p>სართული: {item.sartuli}</p>
                                        <p>კვადრატი: {item.kvadrati}</p>
                                        <p>ფასი: 
                                            {this.state.karkasi === 'შავი' ? <p>{this.state.shavi}</p> : <p>{this.state.tetri}</p>}
                                        $ მ2</p>
                                        <p>სულ: {this.state.karkasi === 'შავი' ? <p>{item.fasi}</p> : <p>{item.fasiTetri}</p>}$</p>
                                        {item.mdgomareoba === '' ? <a href="#kontakti">შეიძინე ახლავე</a> : <p className={item.mdgomareoba}>გაყიდულია</p>}
                                    </div>
                                </div>))}
                            </div>
                        )}
                        {this.state.bina === 'but9' && (
                            <div className="binebi">
                                {this.state.bina724
                                .filter(item => this.state.sartuli === '' ? item.sartuli : item.sartuli === this.state.sartuli)
                                .map((item, index) => 
                                (<div className="binaDiv" key={index}>
                                    <img src={item.img}  alt="Manglisi Inn მანგილისი ინნ"/>
                                    <div className="info">
                                        <button className="shavi" onClick={() => this.handleKarkasiOne()}>შავი კარკასი</button>
                                        <button className="tetri" onClick={() => this.handleKarkasi()}>თეთრი კარკასი</button>
                                        <h2>{this.state.karkasi} კარკასი</h2>
                                        <p>სართული: {item.sartuli}</p>
                                        <p>კვადრატი: {item.kvadrati}</p>
                                        <p>ფასი: 
                                            {this.state.karkasi === 'შავი' ? <p>{this.state.shavi}</p> : <p>{this.state.tetri}</p>}
                                        $ მ2</p>
                                        <p>სულ: {this.state.karkasi === 'შავი' ? <p>{item.fasi}</p> : <p>{item.fasiTetri}</p>}$</p>
                                        {item.mdgomareoba === '' ? <a href="#kontakti">შეიძინე ახლავე</a> : <p className={item.mdgomareoba}>გაყიდულია</p>}
                                    </div>
                                </div>))}
                            </div>
                        )}
                        {this.state.bina === 'but10' && (
                            <div className="binebi">
                                {this.state.bina777
                                .filter(item => this.state.sartuli === '' ? item.sartuli : item.sartuli === this.state.sartuli)
                                .map((item, index) => 
                                (<div className="binaDiv" key={index}>
                                    <img src={item.img}  alt="Manglisi Inn მანგილისი ინნ"/>
                                    <div className="info">
                                        <button className="shavi" onClick={() => this.handleKarkasiOne()}>შავი კარკასი</button>
                                        <button className="tetri" onClick={() => this.handleKarkasi()}>თეთრი კარკასი</button>
                                        <h2>{this.state.karkasi} კარკასი</h2>
                                        <p>სართული: {item.sartuli}</p>
                                        <p>კვადრატი: {item.kvadrati}</p>
                                        <p>ფასი: 
                                            {this.state.karkasi === 'შავი' ? <p>{this.state.shavi}</p> : <p>{this.state.tetri}</p>}
                                        $ მ2</p>
                                        <p>სულ: {this.state.karkasi === 'შავი' ? <p>{item.fasi}</p> : <p>{item.fasiTetri}</p>}$</p>
                                        {item.mdgomareoba === '' ? <a href="#kontakti">შეიძინე ახლავე</a> : <p className={item.mdgomareoba}>გაყიდულია</p>}
                                    </div>
                                </div>))}
                            </div>
                        )}
                        {this.state.bina === 'but11' && (
                            <div className="binebi">
                                {this.state.bina825
                                .filter(item => this.state.sartuli === '' ? item.sartuli : item.sartuli === this.state.sartuli)
                                .map((item, index) => 
                                (<div className="binaDiv" key={index}>
                                    <img src={item.img}  alt="Manglisi Inn მანგილისი ინნ"/>
                                    <div className="info">
                                        <button className="shavi" onClick={() => this.handleKarkasiOne()}>შავი კარკასი</button>
                                        <button className="tetri" onClick={() => this.handleKarkasi()}>თეთრი კარკასი</button>
                                        <h2>{this.state.karkasi} კარკასი</h2>
                                        <p>სართული: {item.sartuli}</p>
                                        <p>კვადრატი: {item.kvadrati}</p>
                                        <p>ფასი: 
                                            {this.state.karkasi === 'შავი' ? <p>{this.state.shavi}</p> : <p>{this.state.tetri}</p>}
                                        $ მ2</p>
                                        <p>სულ: {this.state.karkasi === 'შავი' ? <p>{item.fasi}</p> : <p>{item.fasiTetri}</p>}$</p>
                                        {item.mdgomareoba === '' ? <a href="#kontakti">შეიძინე ახლავე</a> : <p className={item.mdgomareoba}>გაყიდულია</p>}
                                    </div>
                                </div>))}
                            </div>
                        )}
                    </div>}
                </div>
            </div>
        )
    }
}