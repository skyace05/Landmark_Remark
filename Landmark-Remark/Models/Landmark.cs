using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Landmark_Remark.Models
{
    public class Landmark
    {
        public int Id { get; set; }
        public string Location { get; set; }
        public string User { get; set; }
        public string Note { get; set; }
    }
}