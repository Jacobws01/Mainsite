import React, { useContext, useState, useEffect } from "react";
import Link from 'next/link'
import Image from 'next/image'
import { RiShoppingCartFill } from 'react-icons/ri';
import { FaBars, FaTimes, FaCodepen } from 'react-icons/fa';
import { AiFillCaretDown, } from 'react-icons/ai';

import styles from '../styles/Header.module.css'

function Header() {
    return (
		<header>
        <div className={styles.containerhead}>
            <div className={styles.header}>
                <div className={styles.headertop}>
                    <div className={styles.containerhead}>
                        <div className={styles.headerlogo}>
                            <a to='/'>
                                <FaCodepen />
                                </a>
                                <h1><span>Jacob</span> Sinclair</h1>
                        </div>
                        <div className={styles.headermenu}>
                            <div className={styles.burgerwrapper}>
                                <svg className={styles.burgerham}>
                                    <path className={styles.linetop}/>
                                    <path className={styles.linemiddle}/>
                                    <path className={styles.linebottom}/>
                                </svg>
                            </div>
                            <nav>
                                <ul>
                                    <li className={styles.sub}><a href='/'>Home</a>
                                    </li>
                                    <li className={styles.sub}><a href='/portfolio'>Portfolio</a>
                                    </li>
                                    <li className={styles.sub}><a href='/contact'>Contact</a></li>
                                </ul>
                            </nav>
                            <a className={styles.btnmain} href='/contact'><span>Get a Quote</span></a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
    </header>
    );
}

export default Header;