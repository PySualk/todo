package org.sualk.service.dto;

import java.io.Serializable;

/**
 * A DTO for the {@link org.sualk.domain.Todo} entity.
 */
public class TodoDTO implements Serializable {
    
    private Long id;

    private String text;

    private Boolean completed;


    private Long categoryId;
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Boolean isCompleted() {
        return completed;
    }

    public void setCompleted(Boolean completed) {
        this.completed = completed;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof TodoDTO)) {
            return false;
        }

        return id != null && id.equals(((TodoDTO) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "TodoDTO{" +
            "id=" + getId() +
            ", text='" + getText() + "'" +
            ", completed='" + isCompleted() + "'" +
            ", categoryId=" + getCategoryId() +
            "}";
    }
}
