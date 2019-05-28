<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "chatprog";
    $result_array = array();

    $conn = new mysqli($servername, $username, $password, $dbname);

    if(!$conn){
        die("Erro na conexão" . mysqli_connect_error());
    }

    $sql = $_POST['sql'];
    //echo "SQL: " . $sql . "<br>";

    $result = mysqli_query($conn, $sql);
    
    if ($result){
        if(mysqli_num_rows($result)>0){
            while($row = mysqli_fetch_assoc($result)){
                array_push($result_array, $row);
            }
        }
    }else{
        echo "Erro na consulta: ";
        var_dump($result);
    }

    echo json_encode($result_array);
    mysqli_close($conn);

?>