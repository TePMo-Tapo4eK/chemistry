import React, { useState } from "react";
import './components/css-comp/search.css'

const Search = () => {
    

    const reactMassive = [
        //Шаблон

        // ----------------
        // {el1: '', el2: '', res: ''},
        // ----------------

        //H - Водород
        {el: 'error', el2: 'error', res: 'Error'},
        {el1: 'H2SO4', el2: '2NaOH', res: 'Na2SO4'},
        {el1: '2H', el2: '2OH', res: '2H2O'},
        {el1: 'H', el2: 'OH', res: 'H2O'},
        {el1: 'H2', el2: 'S', res: 'H2S'},
        {el1: 'H2', el2: '2Na', res: '2NaH'},
        {el1: 'H2', el2: 'Ca', res: 'CaH2'},
        {el1: '3H2', el2: 'N2', res: '2NH3'},
        {el1: '2H2', el2: 'C', res: 'CH4'},
        {el1: 'H2', el2: 'ZnO', res: 'Zn + H2O'},
        {el1: 'H2', el2: 'CuO', res: 'Cu + H2O'},
        {el1: 'H2', el2: 'N2O', res: 'N2 + H2O'},
        {el1: '2H2O', el2: 'SiH4', res: 'SiO2 + 4H2'},
        {el1: '4HCl', el2: 'Mg2Si', res: '2MgCl2 + SiH4'},
        {el1: '6H2O', el2: 'Ca3N2', res: '3CaOH2 + 2NH3'},
        {el1: '6H2O', el2: 'Ca3P2', res: '3CaOH2 + 2PH3'},
        {el1: '6HCl', el2: 'Mg3P2', res: '3MgCl2 + 2PH3'},
        {el1: '2HCl', el2: 'FeS', res: 'FeCl2 + H2S'},
        {el1: '8HNO3', el2: 'PH3', res: 'H3PO4 + 8NO2 + 4H2O'},
        {el1: '3H2SO4', el2: 'PH3', res: 'H3PO4 + 3SO2 + 3H2O'},
        {el1: 'H2O', el2: 'CH4', res: 'СО + 3Н2'},
        {el1: '', el2: '', res: ''},
        {el1: '', el2: '', res: ''},
        {el1: '', el2: '', res: ''},
        {el1: '', el2: '', res: ''},
        {el1: '', el2: '', res: ''},
        {el1: '', el2: '', res: ''},
        {el1: '', el2: '', res: ''},
        {el1: '', el2: '', res: ''},
        {el1: '', el2: '', res: ''},



  

        //He - Гелий
        //Li - Литий
        //Be - Бериллий
        //B - Бор
        //C - Углерод

        {el1: 'CH4', el2: '2O2', res: 'CO2 + H2O'},
        {el1: 'CH4', el2: 'H2O', res: 'СО + 3Н2'},

        {el1: 'C', el2: 'O2', res: 'CO2'},
        {el1: 'C', el2: '2H2', res: 'CH4'},


        //N - Азот

        {el1: 'N2', el2: '3H2', res: '2NH3'},
        {el1: 'N20', el2: 'H2', res: 'N2 + H2O'},
        {el1: '2NH4Cl', el2: 'CaOH2', res: 'CaCl2 + 2NH3 + 2H2O'},

        //O - Кислород

        {el1: '2OH', el2: '2H', res: ' 2H2O'},
        {el1: 'OH', el2: 'H', res: 'H2O'},
        {el1: '2O2', el2: 'CH4', res: 'CO2+2H2O'},
        {el1: 'O2', el2: 'C', res: 'CO2'},
        {el1: '2O2', el2: '4SiH', res: 'SiO2 + 2H2O'},
        {el1: '4O2', el2: '3H2PH3', res: 'P2O5 + 3H2O'},
        {el1: '2O2', el2: 'PH3', res: 'H3PO4'},

        //F - Фтор
        //Ne - неон
        //Na - Натрий

        {el1: 'Na', el2: 'Cl', res:'NaCl'},
        {el1: '2NaOH', el2: 'H2SO4', res: 'Na2SO4'},
        {el1: '2Na', el2: 'H2', res: '2NaH'},

        //Mg - Магний

        {el1: 'Mg2Si', el2: '4HCl', res: '2MgCl2 + SiH4'},
        {el1: 'Mg3P2', el2: '6HCl', res: '3MgCl2 + 2PH3'},

        //Al - Алюминий
        //Si - Кремний

        {el1: 'SiH4', el2: '2O2', res: 'SiO2 + 2H2O'},
        {el1: 'SiH4', el2: '2H2O', res: 'SiO2 + 4H2'},
        {el1: '', el2: '', res: ''},
        {el1: '', el2: '', res: ''},
        //P - Фосфор

        {el1: '2PH3', el2: '4O2', res: 'P2O5 + 3H2O'},
        {el1: 'PH3', el2: '2O2', res: 'H3PO4'},
        {el1: 'PH3', el2: '8HNO3', res: 'H3PO4 + 8NO2 + 4H2O'},
        {el1: 'PH3', el2: '3H2SO4', res: 'H3PO4 + 3SO2 + 3H2O'},
        {el1: '', el2: '', res: ''},
        {el1: '', el2: '', res: ''},
        
        //S - Сера

        {el1: 'S', el2: 'H2', res: 'H2S'},

        //Cl - Хлор

        {el1: 'Cl', el2: 'Na', res:'NaCl'},
        {el1: 'Cl', el2: 'Ag', res: 'AgCl'},


        //Ar - Аргон
        //K - Калий

        {el1: 'KCl', el2: 'AgNO3', res: 'AgCl+KNO3'},


        //Ca - Кальций

        {el1: 'Ca', el2: 'H2', res: 'CaH2'},
        {el1: 'CaOH2', el2: '2NH4Cl', res: 'CaCl2 + 2NH3 + 2H2O'},
        {el1: 'Ca3N2', el2: '6H2O', res: '3CaOH2 + 2NH3'},
        {el1: 'Ca3P2', el2: '6H2O', res: '3CaOH2 + 2PH3'},

        //Sc - Скандий
        //Ti - Титан
        //V - Ванадий
        //Cr - Хром
        //Mn - марганец
        //Fe - Железо
        //Co - Кобальт
        //Ni - Никель
        //Cu - Медь

        {el1: 'CuSO4', el2: 'Zn', res: ' ZnSO4+Cu'},
        {el1: 'Cu2', el2: 'Zn', res: 'Zn2+Cu'},
        {el1: 'CuO', el2: 'H2', res: 'Cu+H2O'},

        //Zink - Цинк

        {el1: 'Zn', el2: 'Cu2', res: 'Zn2+Cu'},
        {el1: 'Zn', el2: 'CuSO4', res: ' ZnSO4+Cu'},
        {el1: 'ZnO', el2: 'H2', res: 'Zn+H2O'},


        //Ga - Галлий
        //Ge - Германий
        //As - Мышьяк
        //Se - Селен
        //Br - Бром
        //Kr - Криптон
        //Rb - Рубидий
        //Sr - Стронций
        //Y - Иттрий
        //Zr - Цирконий
        //Nb - Ниобий
        //Mo - Молибден
        //Tc - Технеций
        //Ru - Рутенний
        //Rh - Родий
        //Pb - Палладий
        //Ag - Серебро

        {el1: 'AgNO3', el2: 'KCl', res: 'AgCl+KNO3'},
        {el1: 'Ag', el2: 'Cl', res: 'AgCl'},

        //Cd - Кадмий
        //In - Индий
        //Sn - Олово
        //Sb - Сурьма
        //Te - Теллур
        //I - Иод
        //Xe - Ксенон
        //Cs - Цезий
        //Ba - Барий
        //Hf - 
        //Ta
        //W
        //Re
        //Os
        //Ir
        //Pt
        //Au
        //Hg
        //Tl
        //Pb
        //Bi
        //Po
        //At
        //Rn
        //Fr
        //Ra
        //Ku
        //Ns
        //La
        //Ce
        //Pr
        //Pm
        //Sm
        //Eu
        //Gd
        //Tb
        //Dy
        //Ho
        //Er
        //Tm
        //Yb
        //Lu
        //Ac
        //Th
        //Pa
        //U
        //Np
        //Pu
        //Am
        //Cm
        //Bk
        //Cf
        //Es
        //Fm
        //Md
        //No
        //lr
    ]

    const [el1, setEl1] = useState('H')
    const [el2, setEl2] = useState('OH')
    const [res, setRes] = useState('H2O')
    const [inp, setInp] = useState({inp1: "", inp2: ""})

    let FindItemST = reactMassive.find(function(item) {
        if(item.el1 === inp.inp1 && item.el2 === inp.inp2) {
            return (item.el1 === inp.inp1 && item.el2 === inp.inp2) || (item.el2 === inp.inp2 && item.res === inp.res) || (item.el1 === inp.inp1 && item.res === inp.res)
        }
    })

    const Finditem = () => {
        if (FindItemST.el1 === inp.inp1 && FindItemST.el2 === inp.inp2) {
        setEl1(el1 => el1 = FindItemST.el1)
        setEl2(el2 => el2 = FindItemST.el2)
        setRes(res => res = FindItemST.res)}
    }



    return(
        <div className="search-block">
            <div className="search-content">
            <input type='text' placeholder={el1} onChange={prev => setInp({...inp, inp1: prev.target.value})} value={inp.inp1}></input>
            <input type='text' placeholder={el2} onChange={prev => setInp({...inp, inp2: prev.target.value})} value={inp.inp2}></input>
            
            <div className="search-result"><p>{res}</p></div>
            </div>
            <button onClick={Finditem}>Искать</button>
        </div>
    )
}
export default Search