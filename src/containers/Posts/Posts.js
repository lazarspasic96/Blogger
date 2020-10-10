import classes from './Posts.module.scss';
import React from 'react'
import Card from '../../components/UI/Card/Card'
import NavBar from '../../components/UI/Nav/Nav';
import axios from '../../services/axios'

class Posts extends React.Component {
    constructor(props) {
        super() 
            this.state = {
               articles : []
            
        }
    }

    componentDidMount () {
        axios()
        .then(res => {
            console.log(res.data)
        })

    }



    render() {

        return (
            <>
             
                <section>
                    <header>
                               <h1 className={classes.title}>Trending Articles</h1>
                               <NavBar />
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


export default Posts;