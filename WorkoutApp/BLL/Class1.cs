using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class Class1
    {
        public List<workout_category> getall()
        {
            try
            {
                var obj = new casestudyEntities();
                
                return obj.workout_category.ToList() ;
            }
            catch
            {
                throw;
            }
        }

        public workout_category getid(int id)
        {

            try
            {
                var obj = new casestudyEntities();
                var query = (from item in obj.workout_category
                             where item.category_id == id
                             select item).FirstOrDefault();
                return query;
            }
            catch
            {
                throw;
            }
        }
        public void add(workout_category obj)
        {
            try
            {
                var obj1 = new casestudyEntities();
                obj1.workout_category.Add(obj);
            }
            catch
            {
                throw;
            }
        }
        public void put(workout_category obj)
        {
            try
            {
                var obj1 = new casestudyEntities();
                obj1.Entry(obj).State = EntityState.Modified;
              
            }
            catch
            {
                throw;
            }
        }
        public void Delete(int id)
        {
            var obj1 = new casestudyEntities();
            workout_category con = obj1.workout_category.Find(id);
            obj1.workout_category.Remove(con);
        }



    }
}
