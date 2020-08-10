import React from 'react';
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://image.freepik.com/free-vector/synthwave-retrowave_148087-120.jpg" />
            </div>
            <div>ava + description</div>
            <div>
                My posts
          <div>New post</div>
            </div>
            <div>
                <div>Post #1</div>
                <div>Post #2</div>
            </div>
        </div>
    )
}
export default Profile