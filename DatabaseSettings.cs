﻿namespace GraduationProject
{
    public class DatabaseSettings : IDatabaseSettings
    {
        public string ConnectionString { get; set; } = String.Empty;
        public string DatabaseName { get; set; } = String.Empty;
    }
}
