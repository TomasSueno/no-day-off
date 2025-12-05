"use client"

import Link from "next/link"
import styles from "../page.module.scss"

// Without navbar in pages - it's just and only component.
// For now scss in page.module.scss

export default function Navbar() {
    return (
        <>
        <nav>
            <ul className={styles.upgradingNavUl}>
                <li>
                    <Link href="\"><h3>Stay hard, work hard</h3></Link>
                </li>
                <li>
                    <Link href="/statistics">Statistics</Link>
                </li>

                <li>
                    <Link href="#">Blogs</Link>
                </li>

                <li>
                    <Link href="#">To-do</Link>
                </li>

                <li>
                    <Link href="#">Achievements</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}