package org.sualk.repository;

import org.sualk.domain.AppUser;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the AppUser entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AppUserRepository extends JpaRepository<AppUser, Long> {
}
