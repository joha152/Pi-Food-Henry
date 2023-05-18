import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css"


const Landing = ()=>{
    return (

<>
<div className={styles.container}>
        <div className={styles.des}>
        <h1 className={styles.title}>Welcome</h1>
        </div>
        <div className={styles.cont}>
        <h2 className={styles.des}>
        This is a page made with a lot of love by Johanna, so you can find your ideal recipe and so you can create that recipe that was from your grandmother and that you love so much and want to share!!
        Enjoy it!
        </h2>
        </div>
    <Link to="/home">
    <button className={styles.button}>HOME</button>
    </Link>
    

</div>
</>
    )


}

export default Landing;