using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoAngularLab.Models;

namespace ToDoAngularLab.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ToDoController
    {
        ToDoDAL td = new ToDoDAL();

        [HttpGet]
        public List<ToDo> GetToDos()
        {
            return td.GetToDos();
        }
        
        [HttpGet("get/{id}")]
        public ToDo GetToDo(int id)
        {
            return td.GetToDo(id);
        }

        [HttpPost("makeNew")]
        public void PostToDo(ToDo t)
        {
            td.CreateToDo(t);
        }

        [HttpDelete("delete/{id}")]
        public void DeleteToDo(int id)
        {
            td.DeleteToDo(id);
        }

        [HttpPut("update/{id}")]
        public void UpdateToDo(int id, ToDo t)
        {
            ToDo og = td.GetToDo(id);
            if(t.Name == null || t.Name == "")
            {
                t.Name = og.Name;
            }
            if(t.Description == null || t.Description == "")
            {
                t.Description = og.Description;
            }
            td.UpdateToDo(id, t);
        }
    }
}
