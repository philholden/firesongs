import React, { Component } from 'react';
import AutoForm from './auto-form';
import * as firebase from 'firebase';
import withUser from './with-user';


class CreateGroupForm extends Component {
  state = {
    error: ''
  }

  // function toggleStar(postRef, uid) {
  //   postRef.transaction(function(post) {
  //     if (post) {
  //       if (post.stars && post.stars[uid]) {
  //         post.starCount--;
  //         post.stars[uid] = null;
  //       } else {
  //         post.starCount++;
  //         if (!post.stars) {
  //           post.stars = {};
  //         }
  //         post.stars[uid] = true;
  //       }
  //     }
  //     return post;
  //   });
  // }

  // var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com");
  // // Generate a new push ID for the new post
  // var newPostRef = ref.child("posts").push();
  // var newPostKey = newPostRef.key();
  // // Create the data we want to update
  // var updatedUserData = {};
  // updatedUserData["user/posts/" + newPostKey] = true;
  // updatedUserData["posts/" + newPostKey] = {
  //   title: "New Post",
  //   content: "Here is my new post!"
  // };
  // // Do a deep-path update
  // ref.update(updatedUserData, function(error) {
  //   if (error) {
  //     console.log("Error updating data:", error);
  //   }
  // });


  onChange = value => {
    const { user } = this.props
    const exists = firebase.database().ref(`groups/${value.id}/exists`)
    exists.once('value', snap => {
      console.log(snap.val())
      if (snap.val()) {
        this.setState({
          error: 'group already exists'
        })
      } else {
        firebase
          .database()
          .ref()
          .update({
            [`groups/${value.id}`]: {
              exists: true,
              admins: {
                [user.uid]: true,
              },
              users: {
                [user.uid]: true,
              },
              songs: {
                versions: {
                  "1": 1,
                },
                items: {
                  "1":
`title: Doxology
author: Thomas Ken

Praise God from whom all blessings flow;
Praise him, all creatures here below;
Praise him above, ye heavenly host:
Praise Father, Son, and Holy Ghost.`
                }
              },
              channels: {
                "main": {}
              }
            },
            [`users/${user.uid}/groups`]: {
              [value.id]:true,
            },
          })
      }

    })
  }

  render() {
    const { user } = this.props
    if (!user) {
      return <div>Please login to create group</div>
    }
    return (
      <AutoForm
        value={{id: ''}}
        onChange={this.onChange}
        structure={[
          {
            key: 'id',
            label: 'Group Id',
            type: 'text',
          },
        ]}
      />
    )
  }
}

export default withUser(CreateGroupForm)
