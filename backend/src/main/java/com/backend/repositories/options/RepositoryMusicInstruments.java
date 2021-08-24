package com.backend.repositories.options;

import com.backend.pojos.MusicInstrument;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryMusicInstruments extends JpaRepository<MusicInstrument , Long> {
}
