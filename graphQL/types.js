const { GraphQLInputObjectType, GraphQLID, GraphQLString, GraphQLList } = require('graphql')
const { user, post, comment } = require('../models');

const userType = new GraphQLInputObjectType({
    name: "User",
    description: "user type",
    fields: () => ({
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        displayName: { type: GraphQLString }
    })
});

const postType = new GraphQLInputObjectType({
    name: "Post",
    description: "Post types",
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        author: { 
            type: userType,
            resolve(parent, args){
                return user.findById(parent.authorId)
            }
        },
        comments: { 
            type: GraphQLList(commentType),
            resolve(parent, args){
                return comment.find({postId: parent.id})
            }
        },
    })
});

const commentType = new GraphQLInputObjectType({
    name: "Comment",
    description: "Comment Type",
    fields: () => ({
        id: { type: GraphQLID },
        comment: { type: GraphQLString },
        user: {
            type: userType,
            resolve(parent, args) {
               return user.findById(parent.userId)
            }
        },
        post: {
            type: postType,
            resolve(parent, args) {
               return post.findById(parent.postId)
            }
        }     
    })
})

module.exports = { userType, postType, commentType }
