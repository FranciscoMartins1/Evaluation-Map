package com.example.qsproject.qsproject;

// Interface com os métodos que terao de ser utilizados no UserServiceImpl
public interface UserService {
    UsersDto createUser(UsersDto usersDto);

    UsersDto getUserById(int id);

    //05/11
    UsersDto deleteUserById(int id);
}
