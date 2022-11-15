const socket = new io();

const play_note = (instrument, pitch, userId) => {
    const synth = new Tone.Synth().toDestination();
    
    socket.emit('play_note', {
        user: userId,
        instrument: instrument,
        pitch: pitch
    });

    const now = Tone.now();
    synth.triggerAttackRelease("C4", "8n", now)
}