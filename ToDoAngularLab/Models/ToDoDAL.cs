using Dapper;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoAngularLab.Models
{
    public class ToDoDAL
    {
        public List<ToDo> GetToDos()
        {
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                string sql = "select * from todos";
                connect.Open();
                List<ToDo> output = connect.Query<ToDo>(sql).ToList();
                connect.Close();
                return output;
            }
        }

        public ToDo GetToDo(int id)
        {
            List<ToDo> output = GetToDos();
            ToDo match;
            try
            {
                match = output.Where(m => m.Id == id).First();
            }
            catch (InvalidOperationException)
            {
                match = new ToDo();
                match.Name = $"Task at index {id} does not exist. Try another id!";
            }
            return match;
        }

        public void CreateToDo(ToDo t)
        {
            string sql = $"insert into todos values (0, '{t.Name}','{t.Description},{t.IsCompleted}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<ToDo>(sql);
                connect.Close();
            }
        }

        public void DeleteToDo(int id)
        {
            string sql = $"delete from todos where id = {id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<ToDo>(sql);
                connect.Close();
            }
        }

        public void UpdateToDo(int id, ToDo newTask)
        {
            string sql = $"update todos set name='{newTask.Name}', description='{newTask.Description}', isCompleted='{newTask.IsCompleted} where id={id}'";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<ToDo>(sql);
                connect.Close();
            }
        }
    }
}
