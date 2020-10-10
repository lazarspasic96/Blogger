import React from 'react'
import Input from '../../../components/UI/Input/Input'
import Button from '../../../components/UI/Button/Button'
import classes from './NewPost.module.scss'
import Switcher from '../../../components/UI/Switcher/Switcher'

class NewPost extends React.Component {

    constructor(props) {
        super()
        this.state = {
            newPostForm: {
                title: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Post Title'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false,

                },
                subTitle: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Post Subtitle'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false

                },
                image: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Input URL of image'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false

                },
                text: {
                    elementType: 'textarea',
                    elementConfig: {
                        type: 'textarea',
                        placeholder: 'This is place for your new post!'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                }

            },
            isPublic: true,
            formIsValid: false

        }

    }

    render() {

        const updatedForm = []
        for (let key in this.state.newPostForm) {
            updatedForm.push({
                id: key,
                config: this.state.newPostForm[key]
            })

        }
        const newPost = updatedForm.map(newPostElement => {
            return <Input
                key={newPostElement.id}
                elementType={newPostElement.config.elementType}
                elementConfig={newPostElement.config.elementConfig}
                value={newPostElement.config.value}
                isValid={!newPostElement.config.valid}
                touched={newPostElement.config.touched}
                valueType={newPostElement.id}
                changed={(event) => this.inputHandler(event, newPostElement.id)}
            />

        })


        return (
            <>
             
                <div className={classes.newPostForm}>
                <h1 className = {classes.header}>New Post</h1>
           {/*      <Switcher oN={'Public'} oF={'Private'} clicked={this.isPublic} />  */}
                    <form className={classes.formInput} onSubmit={this.onSubmitForm}>
                        {newPost}
                        <div className = {classes.btnContainer}>
                                  <Button disabled={!this.state.formIsValid} clicked={this.onSubmitForm}>Save Post</Button>
                        </div>
                  
                    </form>
                </div>
            </>
        )
    }

}


export default NewPost