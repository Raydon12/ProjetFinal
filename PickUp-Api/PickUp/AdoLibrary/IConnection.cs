using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace AdoLibrary
{
    public interface IConnection
    {
        int ExecuteNonQuery(Command cmd);
        SqlCommand CreateCommand(Command cmd, SqlConnection connection);
        object ExecuteScalar(Command cmd);
        DataSet GetDataTable(Command cmd);
        IEnumerable<T> ExecuteReader<T>(Command Command, Func<SqlDataReader, T> converter);

    }
}
