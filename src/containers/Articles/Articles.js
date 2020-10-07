import classes from './Articles.module.scss';
import React from 'react'
import Card from '../../components/UI/Card/Card'
import NavBar from '../../components/UI/Nav/Nav';

class Articles extends React.Component {



    render() {

        return (
            <>
             
                <section>
                    <header>
                               <h1 className={classes.title}>Trending Articles</h1>
                    </header>
         
                    <main className = {classes.articleContainer}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                 </main>
                   
                </section>

            </>
        )
    }
}


export default Articles;