import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import "dotenv/config";

const createToken = (user, secret, expiresIn) => {
  const { name, email } = user;
  return jwt.sign({ name, email }, secret, { expiresIn });
};

export default {
  Query: {
    getUsers: (root, args, { User }) => User.find(args),
    getRecipes: (root, args, { Recipe }) => Recipe.find(args)
  },
  Mutation: {
    async createUser(
      root,
      {
        input: { name, email, password }
      },
      { User }
    ) {
      const user = await User.findOne({ email });

      if (user) {
        throw new Error("User already exists");
      }
      const newUser = await new User({ name, email, password }).save();
      return { token: createToken(newUser, process.env.SECRET, "1hr") };
    },
    async updateUser(root, args, { User }) {
      const user = await User.findByIdAndUpdate(args.id, args, { new: true });
      return user;
    },
    async deleteUser(root, args, { User }) {
      const user = await User.findByIdAndRemove(args.id);
      return user;
    },
    async createRecipe(
      root,
      {
        input: { title, description, cooktime, steps, ingredients }
      },
      { Recipe }
    ) {
      const recipe = new Recipe({
        title,
        description,
        cooktime,
        steps,
        ingredients
      }).save();
      return recipe;
    }
  },
  User: {
    // recipes: ({ id }) => Recipe.find(recipe => recipe.author === id)
  },
  Recipe: {
    // author: parent => {
    //   console.log(parent);
    //   // return User.find(parent.author.id);
    //   return null;
    // }
  }
};
