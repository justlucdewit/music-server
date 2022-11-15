const socket = new io();

const play_note = (instrument, pitch, userId) => {
    const synth = new Tone.Synth().toDestination();
    
    if (userId != null) {
        socket.emit('play_note', {
            user: userId,
            instrument: instrument,
            pitch: pitch
        });
    }

    const now = Tone.now();
    synth.triggerAttackRelease(pitch, "8n", now)
}

socket.on('play_note', msg => {
    if (msg.user != '41109f10-443e-4134-8775-c41a017fdd19')
        play_note(msg.instrument, msg.pitch, null)
})