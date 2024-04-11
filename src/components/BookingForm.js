import React, { useState } from 'react';
import { FormWrapper } from './styles';

function BookingForm() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Date: ${date}, Time: ${time}`);
    // Aqui você pode adicionar a lógica para enviar os dados do agendamento para o backend
  };

  return (
    <FormWrapper>
      <h2>Agende um horário</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Data:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          Horário:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
        <button type="submit">Agendar</button>
      </form>
    </FormWrapper>
  );
}

export default BookingForm;
