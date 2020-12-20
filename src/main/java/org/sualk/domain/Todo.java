package org.sualk.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A Todo.
 */
@Entity
@Table(name = "todo")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Todo implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "text")
    private String text;

    @Column(name = "completed")
    private Boolean completed;

    @ManyToOne
    @JsonIgnoreProperties(value = "todos", allowSetters = true)
    private Category category;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public Todo text(String text) {
        this.text = text;
        return this;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Boolean isCompleted() {
        return completed;
    }

    public Todo completed(Boolean completed) {
        this.completed = completed;
        return this;
    }

    public void setCompleted(Boolean completed) {
        this.completed = completed;
    }

    public Category getCategory() {
        return category;
    }

    public Todo category(Category category) {
        this.category = category;
        return this;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Todo)) {
            return false;
        }
        return id != null && id.equals(((Todo) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Todo{" +
            "id=" + getId() +
            ", text='" + getText() + "'" +
            ", completed='" + isCompleted() + "'" +
            "}";
    }
}
