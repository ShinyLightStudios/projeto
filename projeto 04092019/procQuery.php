<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "ilhasql";
    $result_array = array();

    $conn = new mysqli($servername, $username, $password, $dbname);

    if(!$conn){
        die("Erro na conexão" . mysqli_connect_error());
    }

    $sql = $_POST['sql'];
    //echo "SQL: " . $sql . "<br>";
    $comandoSql = explode(" ", $sql);
    $comandosPermitidos = array("SELECT", "INSERT","UPDATE","DELETE");
    if(in_array(strtoupper($comandoSql[1]),$comandosPermitidos)){
        if (strtoupper($comandoSql[1]) == "SELECT"){
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
        }
        else{
            $result = mysqli_query($conn, $sql);
            if($result){
                $result_array[0] = "TRUE";
                echo json_encode($result_array);
            }
            else{
                $result_array[0] = "FALSE";
                echo json_encode($result_array);
            }
        }
    }
    else{
        $result_array[0] = "FALSE";
        $result_array[1] = strtoupper($comandoSql[1])." não é um comando permitido.";
        echo json_encode($result_array);
    }
    mysqli_close($conn);

?>