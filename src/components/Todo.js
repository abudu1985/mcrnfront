/**
 * Created by user on 08/12/18.
 */
import React from 'react';
import {StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Switch} from 'react-native';

export class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo:''
    }

    //throw new Error('yooo');
  }

  handleChange(text) {
    this.setState({
      newTodo: text
    })
  }

  handlePress() {
    fetch('http://192.168.0.104:5000/api/todos', {
      method: 'post',
      body: JSON.stringify({
        name: this.state.newTodo
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      todos = [...this.state.todos, data];
      this.setState({todos, newTodo: ''});
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
      throw error;
    });
  }

   render() {
     return (
       <View style={styles.container}>
         <Switch />
         <View style={styles.form}>
           <TextInput
             value={this.state.newTodo}
             onChangeText={this.handleChange.bind(this)}
             style={styles.input}
             underlineColorAndroid="blue"
           />
           <TouchableOpacity
             onPress={this.handlePress.bind(this)}
             style={styles.button}
           >
             <Text style={styles.buttonText}>Create</Text>
           </TouchableOpacity>
         </View>
         <View style={styles.todos}>
           {this.state.todos.map((todo, i) =>(
             <View style={styles.todo} key={i}>
               <Text style={styles.todoText}>{todo.name}</Text>
             </View>
             ))}
         </View>
       </View>
     )
   }
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row'
  },
  input: {
    flex: 0.7,
    fontSize: 20
  },
  button: {
    flex: 0.3,
    borderWidth: 1,
    height: 45,
    borderColor: 'blue',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6
  },
  container: {
    flex: 1,
    padding: 20
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  todos: {
    marginTop: 60
  },
  todo: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginBottom: 10
  },
  todoText: {
    fontSize: 20
  }
});