package org.sualk.service.mapper;


import org.sualk.domain.*;
import org.sualk.service.dto.TodoDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Todo} and its DTO {@link TodoDTO}.
 */
@Mapper(componentModel = "spring", uses = {CategoryMapper.class})
public interface TodoMapper extends EntityMapper<TodoDTO, Todo> {

    @Mapping(source = "category.id", target = "categoryId")
    TodoDTO toDto(Todo todo);

    @Mapping(source = "categoryId", target = "category")
    Todo toEntity(TodoDTO todoDTO);

    default Todo fromId(Long id) {
        if (id == null) {
            return null;
        }
        Todo todo = new Todo();
        todo.setId(id);
        return todo;
    }
}
