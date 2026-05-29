let pedidoActual = [];
const determinaciones = [
  // SECTOR HEMATOLOGÍA
 { nombre: "Eritrosedimentación", area: "Hematología", muestra: "Sangre entera con EDTA", tubo: "Lila (EDTA)", toma: "Ayuno 8hs", urgencia: "Media", procesamiento: "Dentro de las 4hs", obs: "Temperatura ambiente." },
  { nombre: "Hemograma", area: "Hematología", muestra: "Sangre entera con EDTA", tubo: "Lila (EDTA)", toma: "Ayuno 8hs", urgencia: "Alta", procesamiento: "Dentro de las 4hs", obs: "Conservación Temperatura ambiente." },
  { nombre: "Gota Gruesa", area: "Hematología", muestra: "Punción capilar", tubo: "Extendido", toma: "Ayuno 8hs", urgencia: "Alta", procesamiento: "Inmediato", obs: "Enviar en recipiente seco (sin hielo)." },
  { nombre: "Recuento de reticulocitos", area: "Hematología", muestra: "Sangre entera con EDTA", tubo: "Lila (EDTA)", toma: "Ayuno 8hs", urgencia: "Media", procesamiento: "Antes de 1h", obs: "Procesar en el momento o antes de la hora de extracción." },
  
  // SECTOR HEMOSTASIA
  {// ==========================================
nombre: "Tiempo de Protrombina (TP / TPCS2)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Antes de 5 hs", obs: "Centrifugar y separar en tubo de plástico. Volver a centrifugar. Conservar a Temp. Ambiente. Refrigerar si se demora." },
{ nombre: "Tiempo de Protrombina - Método Manual (TP M)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Antes de 5 hs", obs: "Método manual. Centrifugar y separar en tubo de plástico. Volver a centrifugar. Temp. Ambiente (Refrigerar si se demora)." },
{ nombre: "KPTT (Tiempo de Tromboplastina Parcial Activado / KPTTCS2)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Antes de 5 hs", obs: "Temperatura ambiente. Centrifugar y separar en tubo de plástico. Refrigerar si demora." },
{ nombre: "KPTT - Método Manual (KPTTM)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Antes de 5 hs", obs: "Método manual. Temperatura ambiente. Centrifugar y separar en tubo de plástico." },
{ nombre: "Dímeros D (DIMD)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Antes de 5 hs", obs: "Centrifugar y separar en tubo de plástico. Temperatura ambiente." },
{ nombre: "Fibrinógeno (FIB)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente. Centrifugar y separar en tubo de plástico." },
{ nombre: "Anticoagulante Lúpico (Screning y Confirmatorio - Código 2709)", area: "Hemostasia", muestra: "Plasma citratado MUY pobre en plaquetas", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "CRÍTICO: Doble centrifugado estricto para eliminar plaquetas. Separar en tubo de plástico. Temp. ambiente o congelar si se deriva." },
{ nombre: "Dosaje de von Willebrand: Funcional / Inmunológico (FVWF / 5119)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario / Derivación", obs: "Centrifugar y separar en tubo de plástico. Volver a centrifugar. Temperatura ambiente para procesamiento inmediato." },
{ nombre: "Dosaje Factores de Coagulación (FV, FVII, FVIII, FIX, FX, FXI, FXII, FXIII)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario / Derivación", obs: "Especificar factor solicitado. Centrifugar y separar en tubo plástico. Volver a centrifugar. Temperatura ambiente." },
{ nombre: "Proteína C (PROCCR)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Centrifugar y separar en tubo de plástico. Volver a centrifugar. Temperatura ambiente." },
{ nombre: "Proteína S (PROTSFL)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Centrifugar y separar en tubo de plástico. Volver a centrifugar. Temperatura ambiente." },
{ nombre: "Inhibidores: Antitrombina / Anti Factor VIII / Anti Factor IX (FVIIIBTD / FIXBTD)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario / Derivación", obs: "Centrifugar y separar en tubo de plástico. Volver a centrifugar. Temperatura ambiente." },
{ nombre: "Tiempo de Reptilasa (TR)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Centrifugar y separar del paquete celular en tubo plástico. Volver a centrifugar. Freezar rápidamente a -20°C hasta su procesamiento/derivación." },
  { nombre: "Anticoagulante Lúpico", area: "Hemostasia", muestra: "Plasma citratado Pobre en Plaquetas", tubo: "Celeste (Citrato)", toma: "Ayuno 8hs", urgencia: "Baja", procesamiento: "Especial", obs: "Centrifugar dos veces para eliminar plaquetas." },
  
  // SECTOR QUÍMICA CLÍNICA
  // =========================================================================
{ nombre: "Glucemia (GLU)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Uremia / Urea (URE)", area: "Química clínica", muestra: "Suero o Plasma", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Creatinina Sérica (CRE)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Ionograma Sérico (ION)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Hemoglobina Glicosilada (HBGLIC)", area: "Química clínica", muestra: "Sangre entera", tubo: "Lila (EDTA)", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Ácido Úrico (URI)", area: "Química clínica", muestra: "Suero o Plasma", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "En el día", obs: "Temperatura ambiente. De lo contrario, refrigerar a 4°C." },
{ nombre: "Ácido Úrico Urinario (URIU)", area: "Química clínica", muestra: "Orina de 24 hs", tubo: "Frasco de Orina (24 hs)", toma: "Recolectar orina de 24 hs", urgencia: "Baja", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Mantener el frasco en lugar fresco durante la recolección. Conservar a Temp. ambiente." },
{ nombre: "Albúmina Sérica (ALB)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente o refrigerar." },
{ nombre: "Amilasa Sérica (AMI)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente o refrigerar." },
{ nombre: "Bilirrubina Total y Directa (111)", area: "Química clínica", muestra: "Suero o Plasma", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "PROTEGER DE LA LUZ. Temperatura ambiente o refrigerar." },
{ nombre: "Calcemia / Calcio Sérico (CA)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente o refrigerar." },
{ nombre: "Calcio Urinario / Calciuria 24 hs (CAU)", area: "Química clínica", muestra: "Orina de 24 hs", tubo: "Frasco de Orina (24 hs)", toma: "Recolectar orina de 24 hs", urgencia: "Baja", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Clearence de Creatinina (CL CREL)", area: "Química clínica", muestra: "Suero y Orina de 24 hs", tubo: "Rojo/Amarillo + Frasco de 24 hs", toma: "Punción venosa + Recolección 24 hs", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí (Suero)", separar: "Sí (Suero)", procesamiento: "Diario", obs: "CRÍTICO: Requiere el peso y la talla exacta del paciente, además del volumen total de la orina." },
{ nombre: "Complemento C3 (C3 AUT)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Complemento C4 (C4 AUT)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Creatinina Urinaria (CRE U)", area: "Química clínica", muestra: "Orina de 24 hs", tubo: "Frasco de Orina (24 hs)", toma: "Recolectar orina de 24 hs", urgencia: "Baja", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Creatinquinasa Total / CK (CPK)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente. Evitar inyecciones intramusculares previas." },
{ nombre: "Fosfatasa Alcalina (FAL)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Fósforo Sérico (P)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Fósforo Urinario (PUR)", area: "Química clínica", muestra: "Orina de 24 hs", tubo: "Frasco de Orina (24 hs)", toma: "Recolectar orina de 24 hs", urgencia: "Baja", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Gamma Glutamil Transpeptidasa (GGT)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Glucosa en Orina / Glucosuria 24 hs (GLUR)", area: "Química clínica", muestra: "Orina de 24 hs", tubo: "Frasco de Orina (24 hs)", toma: "Recolectar orina de 24 hs", urgencia: "Baja", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Hierro Sérico / Sideremia (FE)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Índice Albuminuria/Creatinuria (IAB2)", area: "Química clínica", muestra: "Primer Orina de la Mañana", tubo: "Frasco de Orina Limpio", toma: "Recolectar primer chorro medio matutino", urgencia: "Baja", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Índice Proteinuria/Creatininuria (IPC2)", area: "Química clínica", muestra: "Primer Orina de la Mañana", tubo: "Frasco de Orina Limpio", toma: "Recolectar primer chorro medio matutino", urgencia: "Baja", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Inmunoglobulina A (IGA)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Inmunoglobulina G (IGG)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Inmunoglobulina M (IGM)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Ionograma Urinario (ION U)", area: "Química clínica", muestra: "Orina de 24 hs", tubo: "Frasco de Orina (24 hs)", toma: "Recolectar orina de 24 hs", urgencia: "Baja", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Lactato Deshidrogenasa (LDH)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente. No refrigerar (se inactiva a bajas temperaturas)." },
{ nombre: "Magnesio Sérico (MG)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Magnesio Urinario 24 hs (MGUR)", area: "Química clínica", muestra: "Orina de 24 hs", tubo: "Frasco de Orina (24 hs)", toma: "Recolectar orina de 24 hs", urgencia: "Baja", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Microalbuminuria (MICAL)", area: "Química clínica", muestra: "Orina de 24 hs", tubo: "Frasco de Orina (24 hs)", toma: "Recolectar orina de 24 hs", urgencia: "Baja", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Proteína C Reactiva (PCRRE)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Proteínas Totales Séricas (PT)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Test de Tolerancia Oral a la Glucosa (P75)", area: "Química clínica", muestra: "Suero o Plasma", tubo: "Rojo/Amarillo (Múltiples extracciones)", toma: "Protocolo de carga de Glucosa (ASAD)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "RECOMENDACIÓN ASAD:\n• 3 días antes: Ingerir carbohidratos comunes. Evitar estrés, infecciones o fiebre.\n• Concurrir con 8 hs de ayuno exactas y 75g de glucosa de farmacia.\n• Se mide glucemia basal (debe ser <125 mg/dL). Se ingieren 75g de glucosa diluidos en 375ml de agua en 5 min.\n• Reposo sentado estricto por 2 hs para la segunda extracción. Náuseas o vómitos suspenden la prueba." },
{ nombre: "Proteinuria de 24 hs (PT U)", area: "Química clínica", muestra: "Orina de 24 hs", tubo: "Frasco de Orina (24 hs)", toma: "Recolectar orina de 24 hs", urgencia: "Baja", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Transaminasa GOT / AST", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Transaminasa GPT / ALT", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Transferrina (TRAN)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Urea Urinaria (UREU)", area: "Química clínica", muestra: "Orina de 24 hs", tubo: "Frasco de Orina (24 hs)", toma: "Recolectar orina de 24 hs", urgencia: "Baja", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Capacidad Total de Fijación de Hierro (IBCT)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Ácidos Biliares (ACBIL)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Factor Reumatoideo (FRE)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Antiestreptolisina O / ASTO (ASTOE)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
{ nombre: "Ciclosporina (CSA)", area: "Química clínica", muestra: "Sangre Entera", tubo: "Lila (EDTA)", toma: "Punción venosa (Consignar hora última toma médica)", urgencia: "Alta", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Diario / Monitoreo", obs: "CRÍTICO: Enviar SANGRE ENTERA. No centrifugar, no enviar suero ni plasma. Temperatura ambiente." },
{ nombre: "Tacrolimus (TACROQ)", area: "Química clínica", muestra: "Sangre Entera", tubo: "Lila (EDTA)", toma: "Punción venosa (Consignar hora última toma médica)", urgencia: "Alta", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Diario / Monitoreo", obs: "CRÍTICO: Enviar SANGRE ENTERA. No centrifugar, no enviar suero ni plasma. Temperatura ambiente." },
{ nombre: "Fructosamina (FRU)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Jueves", obs: "Corte de procesamiento semanal: días Jueves. Temperatura ambiente." },
{ nombre: "Colesterol Total (COL)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Sector Lípidos. Temperatura ambiente." },
{ nombre: "Triglicéridos (TRI)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Sector Lípidos. Respetar estrictamente el ayuno para evitar sueros lipémicos." },
{ nombre: "Colesterol HDL (HDL)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Sector Lípidos. Temperatura ambiente." },
{ nombre: "Colesterol LDL (LDL)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Sector Lípidos. Temperatura ambiente." },
{ nombre: "Proteinograma Electroforético (PTG)", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "En el día", obs: "Sector Proteínas. Temperatura ambiente. Procesamiento diario." },
{ nombre: "Electroforesis de Hemoglobina (EHEM)", area: "Química clínica", muestra: "Sangre Entera", tubo: "Lila (EDTA)", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "En el día", obs: "Sector Proteínas. Temperatura ambiente. Procesamiento diario." },

// SECTOR HEMOSTASIA
// =========================================================================
{ nombre: "Tiempo de Protrombina (TP / TPCS2)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Antes de 5 hs", obs: "Centrifugar y separar en tubo de plástico. Volver a centrifugar. Conservar a Temp. Ambiente. Refrigerar si se demora." },
{ nombre: "Tiempo de Protrombina - Método Manual (TP M)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Antes de 5 hs", obs: "Método manual. Centrifugar y separar en tubo de plástico. Volver a centrifugar. Temp. Ambiente (Refrigerar si se demora)." },
{ nombre: "KPTT (Tiempo de Tromboplastina Parcial Activado / KPTTCS2)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Antes de 5 hs", obs: "Temperatura ambiente. Centrifugar y separar en tubo de plástico. Refrigerar si demora." },
{ nombre: "KPTT - Método Manual (KPTTM)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Antes de 5 hs", obs: "Método manual. Temperatura ambiente. Centrifugar y separar en tubo de plástico." },
{ nombre: "Dímeros D (DIMD)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Antes de 5 hs", obs: "Centrifugar y separar en tubo de plástico. Temperatura ambiente." },
{ nombre: "Fibrinógeno (FIB)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente. Centrifugar y separar en tubo de plástico." },
{ nombre: "Anticoagulante Lúpico (Screning y Confirmatorio - Código 2709)", area: "Hemostasia", muestra: "Plasma citratado MUY pobre en plaquetas", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "CRÍTICO: Doble centrifugado estricto para eliminar plaquetas. Separar en tubo de plástico. Temp. ambiente o congelar si se deriva." },
{ nombre: "Dosaje de von Willebrand: Funcional / Inmunológico (FVWF / 5119)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario / Derivación", obs: "Centrifugar y separar en tubo de plástico. Volver a centrifugar. Temperatura ambiente para procesamiento inmediato." },
{ nombre: "Dosaje Factores de Coagulación (FV, FVII, FVIII, FIX, FX, FXI, FXII, FXIII)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario / Derivación", obs: "Especificar factor solicitado. Centrifugar y separar en tubo plástico. Volver a centrifugar. Temperatura ambiente." },
{ nombre: "Proteína C (PROCCR)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Centrifugar y separar en tubo de plástico. Volver a centrifugar. Temperatura ambiente." },
{ nombre: "Proteína S (PROTSFL)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Centrifugar y separar en tubo de plástico. Volver a centrifugar. Temperatura ambiente." },
{ nombre: "Inhibidores: Antitrombina / Anti Factor VIII / Anti Factor IX (FVIIIBTD / FIXBTD)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario / Derivación", obs: "Centrifugar y separar en tubo de plástico. Volver a centrifugar. Temperatura ambiente." },
{ nombre: "Tiempo de Reptilasa (TR)", area: "Hemostasia", muestra: "Plasma citratado (Citrato de sodio 3,2%)", tubo: "Celeste (Citrato)", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Centrifugar y separar del paquete celular en tubo plástico. Volver a centrifugar. Freezar rápidamente a -20°C hasta su procesamiento/derivación." },

// =========================================================================
// SECTOR SEROLOGÍA
// =========================================================================
{ nombre: "VDRL Cualitativa (VDRL)", area: "Serología", muestra: "Suero / LCR", tubo: "Rojo/Amarillo", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana (En el día)", obs: "Temperatura ambiente o refrigerar a 4°C." },
{ nombre: "HIV Elisa (HIV)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Chagas Elisa (CHAE)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana (En el día)", obs: "Procesar en el día, de lo contrario mantener en refrigeración (4°C)." },
{ nombre: "Chagas HAI (CHAH)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Temperatura ambiente. Procesar en el día o refrigerar a 4°C." },
{ nombre: "Chagas Microstrout (CHAST)", area: "Serología", muestra: "Sangre Entera", tubo: "Verde (Heparina)", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Alta", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Antes de las 6 hs", obs: "CRÍTICO: No centrifugar. Mantener a temperatura ambiente y procesar antes de las 6 horas de extracción de forma estricta." },
{ nombre: "Citomegalovirus IgG (CMVGQ)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Citomegalovirus IgM (CMVMQ)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Hepatitis A IgM Elisa (HAVM)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Hepatitis B Ac anti-Core (ACORETQ)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Hepatitis B Ag S / Antígeno de Superficie (HBSAG)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Hepatitis B Core M (AHBCM)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Hepatitis B Ac anti-HBsAg / Anti Antígeno de Superficie (AHBSQ)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Monitoreo de anticuerpos (Post-vacunación). Temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Hepatitis C Elisa (HCV)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Reacción de Widal (WID)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Diagnóstico de Salmonelosis. Conservar a temperatura ambiente." },
{ nombre: "Reacción de Huddleson (HUD)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Diagnóstico de Brucelosis. Temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Reacción de Paul-Bunnell (PB)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Mononucleosis infecciosa. Temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Sífilis TPPA (TPPA)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Prueba treponémica confirmatoria. Temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Toxoplasmosis IgG (TOXOG)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Toxoplasmosis IgM (TOXOM)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Extracción por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Virus Epstein-Barr IgG (BARGQ)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Virus Epstein-Barr IgM (BARMQ)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Temperatura ambiente o refrigerar a 4°C." },

  // SECTOR ORINA Y MATERIA FECAL
  { nombre: "Orina Completa", area: "Orina", muestra: "Orina (chorro medio)", tubo: "Frasco limpio", toma: "Higiene previa", urgencia: "Media", ayuno: "Ayuno 8 hs", centrifugar: "No", separar: "No", procesamiento: "2 hs", obs: "Primera orina de la mañana. Procesar en el día o refrigerar." },
  { nombre: "Parasitológico Directo", area: "Parasitología", muestra: "Materia fecal", tubo: "Frasco limpio", toma: "Muestra espontánea", urgencia: "Baja", ayuno: "No", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Sin conservantes. Temperatura ambiente." },
  
  // =========================================================================
// SECTOR ENDOCRINOLOGÍA
// =========================================================================
{ nombre: "Cortisol Sérico (CORTISOL)", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (8:00 AM EXACTA)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Especial", obs: "HORARIO ESTRICTO: Extracción a las 8 AM. Previo ayuno de 8 hs. Consignar medicación. Refrigerar a 4°C hasta 48 hs. Interfiere lipemia e ictericia severa." },
{ nombre: "ACTH / Adenocorticotrofina", area: "Endocrinología", muestra: "Plasma (EDTA)", tubo: "Lila (EDTA)", toma: "Punción venosa (Mañana, antes de las 9 AM)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Inmediato", obs: "CRÍTICO: Usar tubo lila. Centrifugar inmediatamente después de la extracción y llevar directo al sector." },
{ nombre: "Hormona de Crecimiento / Somatotrofina (GH)", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Mañana, antes de las 9 AM)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Inmediato", obs: "Centrifugar inmediatamente después de obtenida la muestra." },
{ nombre: "Factor de Crecimiento Insulínico Tipo 1 (IGF-1)", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Mañana, antes de las 9 AM)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Refrigerar a 4°C hasta 24 hs o congelar." },
{ nombre: "Parathormona Intacta (PTHi)", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Mañana, antes de las 9 AM)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Inmediato", obs: "CRÍTICO: Centrifugar inmediatamente. Refrigerar hasta 48 hs o congelar." },
{ nombre: "Progesterona", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "FISIOLÓGICO: Si menstrual normalmente, recolectar entre los días 21 a 23 del ciclo. Preguntar y anotar FUM. Si no menstrúa, en cualquier día. Interfiere lipemia." },
{ nombre: "Prolactina", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (8:00 AM EXACTA / En reposo)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Especial", obs: "FISIOLÓGICO: Si menstrúa normalmente, recolectar entre días 3 a 5 del ciclo. Anotar FUM. Evitar estrés. Sin relaciones sexuales ni alcohol 48 hs antes. Consignar medicación." },
{ nombre: "Perfil Gonadotrófico: LH / FSH / Estradiol", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Mañana, antes de las 9 AM)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "FISIOLÓGICO: Recolectar entre los días 3 a 5 del ciclo menstrual. Preguntar y anotar FUM de forma obligatoria." },
{ nombre: "Andrógenos: Testosterona (Total/Bio/Libre) / DHEAS / Androstenediona", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Refrigerar hasta 48 hs o congelar." },
{ nombre: "Perfil Tiroideo: TSH / T3 / T4 / T4 Libre", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Mañana, antes de las 9 AM)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Consignar medicación (hormonas tiroideas). Refrigerar hasta 48 hs o congelar." },
{ nombre: "Hormonas y Vitaminas: HCG total / SHBG / Ac. Fólico / Vitamina B12 / Vitamina D / Ferritina / IgE / ATG / ATPO", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Refrigerar hasta 48 hs o congelar." },
{ nombre: "Insulina", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Refrigerar hasta 24 hs o congelar." },
{ nombre: "Péptido C", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Por la mañana)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Inmediato", obs: "Centrifugar inmediatamente el suero tras la retracción del coágulo y llevar directo al sector." },
{ nombre: "Tiroglobulina", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Refrigerar hasta 3 días. Interfiere la hemólisis de manera estricta." },
{ nombre: "Homocisteína", area: "Endocrinología", muestra: "Plasma con EDTA", tubo: "Lila (EDTA)", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Inmediato", obs: "CRÍTICO: Usar tubo lila. Centrifugar inmediatamente y separar. El plasma separado es estable hasta 14 días refrigerado." },
{ nombre: "Marcador Tumoral CA 19.9", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "No requiere", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Refrigerar hasta 48 hs o congelar." },
{ nombre: "Monitoreo Terapéutico: Vancomicina", area: "Endocrinología", muestra: "Suero o Plasma EDTA", tubo: "Rojo/Amarillo o Lila", toma: "Punción venosa", urgencia: "Media", ayuno: "No requiere", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "CRÍTICO: Consignar de forma obligatoria en la orden si la muestra se tomó en VALLE (justo antes de la dosis) o en PICO (post-infusión)." },
{ nombre: "Marcador Tumoral AFP (Alfa Feto Proteína)", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "No requiere", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Refrigerar hasta 3 días." },
{ nombre: "Marcador Tumoral CA 125", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "No requiere", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "CRÍTICO: No realizar la extracción si la paciente se encuentra menstruando." },
{ nombre: "Marcador Tumoral CA 15-3", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "No requiere", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Refrigerar hasta 5 días." },
{ nombre: "Marcador Tumoral CEA (Antígeno Carcinocembrionario)", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "No requiere", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Refrigerar hasta 7 días." },
{ nombre: "Deoxipiridinolina / Resorción Ósea (DPYR)", area: "Endocrinología", muestra: "Primer orina de la mañana o de 2 hs", tubo: "Frasco de Orina Limpio", toma: "Recolectar antes de las 10:00 AM", urgencia: "Baja", ayuno: "No requiere", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Pegar la etiqueta identificatoria directo en el cuerpo del frasco. Interfiere la bilirrubina y la hemólisis." },
{ nombre: "PSA / PSA Libre (Antígeno Prostático)", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "CRÍTICO PACIENTE: No tener relaciones sexuales 2 días antes. Esperar 3 semanas si se realizó ecografía transrectal, tacto rectal o uso de sonda. Sin diarrea/estreñimiento exagerado 1 semana antes. No ingerir alcohol la noche anterior. Sin ejercicio el día anterior. No extraer si cursa infección urinaria o fiebre." },
{ nombre: "Subunidad Beta de HCG Libre (Screening 1° Trimestre)", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Semanas 8 a 13)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Especial", obs: "Screening del primer trimestre (preferentemente semana 11 o 12). OBLIGATORIO: Consignar en el sistema Fecha de toma, FUM y semanas de embarazo exactas. Almacenar hasta 24 hs a 2-8°C, luego congelar a -20°C." },
{ nombre: "PAPP-A / Proteína Plasmática Asociada al Embarazo", area: "Endocrinología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa (Semanas 8 a 13)", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Especial", obs: "Screening del primer trimestre (preferentemente semana 11 o 12). OBLIGATORIO: Consignar en el sistema Fecha de toma, FUM y semanas de embarazo exactas. Almacenar hasta 24 hs a 2-8°C, luego congelar a -20°C." },
  // =========================================================================
// SECTOR PESQUISA NEONATAL
// =========================================================================
{ nombre: "17OH Progesterona Neonatal / Hiperplasia Suprarrenal (17OHPN)", area: "Pesquisa Neonatal", muestra: "Sangre seca en papel de filtro", tubo: "Tarjeta de Papel de Filtro", toma: "Punción del talón (Neonatal)", urgencia: "Alta", ayuno: "No aplica", centrifugar: "No", separar: "No", procesamiento: "Especial", obs: "CRÍTICO: El neonato debe tener 48 hs de vida cumplidas de forma estricta. Conservar a temperatura ambiente." },
{ nombre: "Biotinidasa (BIO)", area: "Pesquisa Neonatal", muestra: "Sangre seca en papel de filtro", tubo: "Tarjeta de Papel de Filtro", toma: "Punción del talón (Neonatal)", urgencia: "Alta", ayuno: "No aplica", centrifugar: "No", separar: "No", procesamiento: "Especial", obs: "CRÍTICO: El neonato debe tener 48 hs de vida cumplidas de forma estricta. Conservar a temperatura ambiente." },
{ nombre: "Fenilalanina / PKU / Fenilcetonuria (PKU)", area: "Pesquisa Neonatal", muestra: "Sangre seca en papel de filtro", tubo: "Tarjeta de Papel de Filtro", toma: "Punción del talón (Neonatal)", urgencia: "Alta", ayuno: "Requiere alimentación previa", centrifugar: "No", separar: "No", procesamiento: "Especial", obs: "CRÍTICO: El neonato debe tener 48 hs de vida cumplidas y haber recibido alimentación (lactancia/fórmula) para activar el metabolismo. Temp. ambiente." },
{ nombre: "Galactosemia (GAL)", area: "Pesquisa Neonatal", muestra: "Sangre seca en papel de filtro", tubo: "Tarjeta de Papel de Filtro", toma: "Punción del talón (Neonatal)", urgencia: "Alta", ayuno: "Requiere alimentación previa", centrifugar: "No", separar: "No", procesamiento: "Especial", obs: "CRÍTICO: El neonato debe tener 48 hs de vida cumplidas y haber recibido alimentación (lactancia/fórmula). Conservar a temperatura ambiente." },
{ nombre: "Carga Viral Hepatitis B (Plan Nacional)", area: "Pesquisa Neonatal", muestra: "Plasma con EDTA (Libre de RNasas/DNasas)", tubo: "Lila (EDTA) - ENVIAR 2 TUBOS DE 5ML", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Derivación (Malbrán)", obs: "CRÍTICO: Centrifugar dentro de las 2 hs de extracción de forma obligatoria. Enviar acompañado de la planilla específica del INSTITUTO MALBRÁN. Estabilidad: 24 hs a (8-25°C)." },
{ nombre: "Carga Viral Hepatitis C (Plan Nacional)", area: "Pesquisa Neonatal", muestra: "Plasma con EDTA (Libre de RNasas/DNasas)", tubo: "Lila (EDTA) - ENVIAR 1 TUBO DE 5ML", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Derivación (Malbrán)", obs: "CRÍTICO: Centrifugar dentro de las 2 hs de extracción de forma obligatoria. Enviar acompañado de la planilla específica del INSTITUTO MALBRÁN. Estabilidad: 24 hs a (8-25°C)." },
{ nombre: "Genotipificación de Hepatitis C (Plan Nacional)", area: "Pesquisa Neonatal", muestra: "Plasma con EDTA (Libre de RNasas/DNasas)", tubo: "Lila (EDTA) - ENVIAR 1 TUBO DE 5ML", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Derivación (Malbrán)", obs: "CRÍTICO: Centrifugar dentro de las 2 hs de extracción de forma obligatoria. Enviar acompañado de la planilla específica del INSTITUTO MALBRÁN. Estabilidad: 24 hs a (8-25°C)." },
{ nombre: "Chagas por PCR (Hijos de madres positivas)", area: "Pesquisa Neonatal", muestra: "Sangre entera con EDTA (1ml)", tubo: "Lila Pediatric / Microtainer EDTA", toma: "Punción venosa o talón", urgencia: "Alta", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Especial", obs: "Protocolo para hijos de madres positivas hasta los 10 meses de vida. Mantener a temperatura ambiente (refrigerar a 4°C únicamente durante el transporte)." },
{ nombre: "Tripsina Inmunoreactiva / Fibrosis Quística (TIR)", area: "Pesquisa Neonatal", muestra: "Sangre seca en papel de filtro", tubo: "Tarjeta de Papel de Filtro", toma: "Punción del talón (Neonatal)", urgencia: "Alta", ayuno: "No aplica", centrifugar: "No", separar: "No", procesamiento: "Especial", obs: "CRÍTICO: El neonato debe tener 48 hs de vida cumplidas de forma estricta. Conservar a temperatura ambiente." },
{ nombre: "TSH Neonatal / Hipotiroidismo Congénito (TSHN)", area: "Pesquisa Neonatal", muestra: "Sangre seca en papel filtro", tubo: "Tarjeta de Papel de Filtro", toma: "Punción del talón (Neonatal)", urgencia: "Alta", ayuno: "No aplica", centrifugar: "No", separar: "No", procesamiento: "Especial", obs: "CRÍTICO: El neonato debe tener 48 hs de vida cumplidas de forma estricta. Conservar a temperatura ambiente." },
{ nombre: "Fibrosis Quística - Mutación Delta F 508", area: "Pesquisa Neonatal", muestra: "Sangre entera (Filtro / EDTA) o Hisopado mucosa yugal", tubo: "Tarjeta / Lila (EDTA) / Tubo de Hisopado", toma: "Punción / Raspado de mucosa bucal", urgencia: "Baja", ayuno: "No requiere", centrifugar: "No", separar: "No", procesamiento: "Especial / Estudio Genético", obs: "Muestra aceptada en múltiples soportes: Sangre entera en papel de filtro, sangre entera con anticoagulante EDTA o hisopado de mucosa yugal (boca)." },
  // =========================================================================
// SECTOR AUTOINMUNIDAD
// =========================================================================
{ nombre: "ANA / Factor Antinúcleo (FAN)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Estabilidad: Procesar en el día a temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Anti DNA nativo / de doble cadena", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Estabilidad: Procesar en el día a temperatura ambiente o refrigerar a 4°C." },
{ nombre: "ANCA C / Anticuerpos anti-citoplasma de neutrófilos c", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Estabilidad: Procesar en el día a temperatura ambiente o refrigerar a 4°C." },
{ nombre: "ANCA P / Anticuerpos anti-citoplasma de neutrófilos p", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Estabilidad: Procesar en el día a temperatura ambiente o refrigerar a 4°C." },
{ nombre: "Anti Endomisio IgA (ENDOA)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Marcador de Celiaquía. Procesar en el día o refrigerar a 4°C." },
{ nombre: "Anti Transglutaminasa IgA (TRAN_A_V)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Marcador de Celiaquía. Procesar en el día o refrigerar a 4°C." },
{ nombre: "Anti Péptido Deaminado de Gliadina IgG (DGPG)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Marcador de Celiaquía. Procesar en el día o refrigerar a 4°C." },
{ nombre: "AMA / Anticuerpos Anti-Mitocondriales / M2", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Asociado a Cirrosis Biliar Primaria. Procesar en el día o refrigerar a 4°C." },
{ nombre: "ASMA / Anticuerpos Anti-Músculo Liso (LISO)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Asociado a Hepatitis Autoinmune. Procesar en el día o refrigerar a 4°C." },
{ nombre: "Anti Jo-1 IgG (JO1 / JO)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Marcador de miositis. Procesar en el día o refrigerar a 4°C." },
{ nombre: "Anti CCP / Anticuerpo anti-péptido citrulinado cíclico (PEP / PCP)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Alta especificidad para Artritis Reumatoidea. Procesar en el día o refrigerar a 4°C." },
{ nombre: "Anti Sm IgG (SM)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Altamente específico para Lupus (LES). Procesar en el día o refrigerar a 4°C." },
{ nombre: "Anti Histonas IgG (HISTONAS / HISTO)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Asociado a Lupus inducido por drogas. Procesar en el día o refrigerar a 4°C." },
{ nombre: "Anti U1-smRNP IgG (RNP)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Marcador de Enfermedad Mixta del Tejido Conectivo. Procesar en el día o refrigerar." },
{ nombre: "APCA / Anticuerpo anti-célula parietal IgG", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Asociado a Anemia Perniciosa/Gastritis Atrófica. Procesar en el día o refrigerar." },
{ nombre: "Anti SCL-70 IgG (SCL70)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Asociado a Esclerodermia sistémica. Procesar en el día o refrigerar." },
{ nombre: "Anti SSa-La IgG (SSB)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Asociado a Síndrome de Sjögren. Procesar en el día o refrigerar." },
{ nombre: "Anti SSa-Ro IgG (SSA)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "No especifica", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Asociado a Síndrome de Sjögren y Lupus neonatal. Procesar en el día o refrigerar." },
{ nombre: "Anti Ribosomal P IgG (PO)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Asociado a Psicosis lúpica / LES activo. Procesar en el día o refrigerar." },
{ nombre: "Anti Membrana Basal Glomerular IgG (MBG)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Asociado a Síndrome de Goodpasture. Procesar en el día o refrigerar." },
{ nombre: "Anti Mieloperoxidasa / ANCA p específico (MPO)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Procesar en el día o refrigerar a 4°C." },
{ nombre: "Anti Proteinasa 3 / ANCA c específico (PR3)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Procesar en el día o refrigerar a 4°C." },
{ nombre: "Anticardiolipinas IgG (CARDIOGL)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Síndrome Antifosfolipídico (SAF). Procesar en el día o refrigerar." },
{ nombre: "Anticardiolipinas IgM (CARDIOML)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Síndrome Antifosfolipídico (SAF). Procesar en el día o refrigerar." },
{ nombre: "Anti Beta-2 Glicoproteína I IgG (B2GPG)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Síndrome Antifosfolipídico (SAF). Procesar en el día o refrigerar." },
{ nombre: "Anti Beta-2 Glicoproteína I IgM (B2GPM)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Síndrome Antifosfolipídico (SAF). Procesar en el día o refrigerar." },
{ nombre: "Anti Nucleosoma IgG (NUCLE)", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Marcador predictivo de nefropatía lúpica. Procesar en el día o refrigerar." },
{ nombre: "Anti LKM1 / Microsomas de Hígado y Riñón tipo 1", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Asociado a Hepatitis Autoinmune tipo 2. Procesar en el día o refrigerar." },
{ nombre: "Anti SLA / Proteínas Solubles Hepáticas", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Asociado a Hepatitis Autoinmune. Procesar en el día o refrigerar." },
{ nombre: "Anti GP210 / Glicoproteína nuclear de membrana 210", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Especificidad para Cirrosis Biliar Primaria. Procesar en el día o refrigerar." },
{ nombre: "Anti SP-100 / Proteína nuclear SP100", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Asociado a Cirrosis Biliar Primaria. Procesar en el día o refrigerar." },
{ nombre: "Anti LC1 / Citosol Hepático tipo 1", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Marcador de Hepatitis Autoinmune tipo 2. Procesar en el día o refrigerar." },
{ nombre: "Anti Mi-2 / Dermatomiositis específica", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Altamente específico para Dermatomiositis. Procesar en el día o refrigerar." },
{ nombre: "Anti PL-12 / Alanil-tRNA Sintetasa", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Asociado a Síndrome Antisintetasa. Procesar en el día o refrigerar." },
{ nombre: "Anti PL-7 / Treonil-tRNA Sintetasa", area: "Autoinmunidad", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Asociado a Síndrome Antisintetasa. Procesar en el día o refrigerar." },
{ nombre: "Calprotectina en materia fecal (cpf)", area: "Autoinmunidad", muestra: "Materia fecal sin aditivos", tubo: "Frasco de Orina Estéril (Común)", toma: "Muestra espontánea de heces", urgencia: "Baja", ayuno: "No aplica", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "CRÍTICO MUESTRA: Entregar muestra en frasco limpio sin aditivos. Procesar en el día o mantener refrigerado." },
{ nombre: "Crioglobulinas / Protocolo Térmico (CRIOGLOB2)", area: "Autoinmunidad", muestra: "Suero (Protocolo Estricto 37°C)", tubo: "Rojo (Sin Gel Separador, precalentado)", toma: "Punción venosa con jeringa a 37°C", urgencia: "Alta", ayuno: "No especifica", centrifugar: "Sí", separar: "Sí", procesamiento: "Inmediato / Especial", obs: "CRÍTICO EXTRACCIÓN: Extraer con jeringa precalentada a 37°C. Colocar en tubo seco y mantener a 37°C de forma constante hasta su coagulación completa (ej: baño termostático, cuidando que todo el volumen quede rodeado por el agua). Centrifugar en centrífuga precalentada (operada previamente 20-30 min). Aspirar el suero con pipeta precalentada y pasar a tubo seco." },
  
  // =========================================================================
// SECTOR MICROBIOLOGÍA
// =========================================================================
{ nombre: "Urocultivo / Cultivo de Orina (URO)", area: "Microbiología", muestra: "Orina (Chorro Medio)", tubo: "Frasco Estéril", toma: "Higiene previa con agua y jabón, descartar primer chorro", urgencia: "Media", ayuno: "No requiere (Retención mínima 3-4 hs)", centrifugar: "No", separar: "No", procesamiento: "Dentro de las 2 hs", obs: "Hombre: retraer prepucio para higiene. Mujer: colocar tapón vaginal. Si demora >2 hs, refrigerar obligatoriamente a 4°C (puerta de heladera) rodeado de hielo. No congelar." },
{ nombre: "Exudado de Fauces / Cultivo faríngeo (FAU)", area: "Microbiología", muestra: "Secreción faríngea", tubo: "Hisopo seco con medio (Stuart/Amies)", toma: "Hisopado de fauces con bajalengua (En Laboratorio)", urgencia: "Media", ayuno: "8 hs (Sin higiene bucal, gárgaras, pastillas ni chicles)", centrifugar: "No", separar: "No", procesamiento: "12 hs", obs: "CRÍTICO: No estar tomando antibióticos (ATB). No usar antisépticos bucales antes de la toma." },
{ nombre: "Hemocultivo Manual / Automatizado (H1 / H2 / H3)", area: "Microbiología", muestra: "Sangre entera", tubo: "Frasco de hemocultivo específico (Adulto/Pediátrico)", toma: "Asepsia estricta con clorhexidina (Muestra de paciente internado)", urgencia: "Alta", ayuno: "No requiere", centrifugar: "No", separar: "No", procesamiento: "Inmediato", obs: "CRÍTICO: Mantener SIEMPRE a temperatura ambiente o en estufa a 35-37°C. NO REFRIGERAR JAMÁS (inactiva las bacterias)." },
{ nombre: "Coprocultivo / Leucocitos en Materia Fecal (COP)", area: "Microbiología", muestra: "Materia fecal diarreica", tubo: "Frasco Estéril", toma: "Muestra fresca espontánea (elegir zonas con moco o sangre)", urgencia: "Media", ayuno: "No requiere", centrifugar: "No", separar: "No", procesamiento: "Inmediato", obs: "No usar laxantes ni aceites. Conservar en heladera hasta su transporte inmediato." },
{ nombre: "Espermocultivo", area: "Microbiología", muestra: "Semen", tubo: "Frasco Estéril", toma: "Masturbación (previo lavado de manos y genitales)", urgencia: "Media", ayuno: "Abstinencia sexual de 3 a 5 días", centrifugar: "No", separar: "No", procesamiento: "Inmediato", obs: "CRÍTICO: Conservar a temperatura ambiente. Traer al laboratorio inmediatamente antes de que transcurra 1 hora de la eyaculación." },
{ nombre: "Exudado / Flujo Vaginal (EXVAG)", area: "Microbiología", muestra: "Secreción vaginal (Flujos)", tubo: "Hisopo (Muestra tomada en laboratorio)", toma: "Higiene externa únicamente. Concurrir entre días 11-25 del ciclo", urgencia: "Baja", ayuno: "No requiere", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "RESTRICCIONES: 48 hs antes: No tener relaciones sexuales, no colocarse óvulos, tabletas ni cremas vaginales. No realizar duchas vaginales. Conservar a temp. ambiente o estufa a 35°C." },
{ nombre: "Exudado Uretral (EXURE)", area: "Microbiología", muestra: "Secreción uretral o 1° chorro de orina", tubo: "Hisopo de secreción / Frasco estéril", toma: "Hisopado uretral. Si no hay secreción: recolectar el primer chorro de orina", urgencia: "Media", ayuno: "No requiere (Sin orinar por lo menos 2 hs antes)", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "CRÍTICO: No estar tomando antibióticos (ATB). Conservar y transportar calente (entre 35°C y 37°C)." },
{ nombre: "Hisopado Nasal (HISN)", area: "Microbiología", muestra: "Secreción nasal (Hisopado de las 2 narinas)", tubo: "Hisopo seco", toma: "Introducir el hisopo rotando en ambas fosas nasales", urgencia: "Media", ayuno: "No requiere", centrifugar: "No", separar: "No", procesamiento: "Inmediato", obs: "Conservar a temperatura ambiente. Traer inmediatamente al laboratorio." },
{ nombre: "Hisopado Rectal (HISR)", area: "Microbiología", muestra: "Materia fecal / Secreción rectal", tubo: "Hisopo con medio de transporte", toma: "Introducción rectal pasando el esfínter anal", urgencia: "Media", ayuno: "No requiere", centrifugar: "No", separar: "No", procesamiento: "Inmediato", obs: "Conservar en heladera. Traer inmediatamente al laboratorio." },
{ nombre: "Streptococcus beta hemolítico Grupo B - Screening Embarazadas (SGB)", area: "Microbiología", muestra: "Hisopado vaginal-anal", tubo: "Caldo Todd Hewitt / Medio de transporte", toma: "Hisopado doble (vagina y luego región anal)", urgencia: "Media", ayuno: "No requiere", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "CRÍTICO PACIENTE: No realizarse higiene genital en las 12 horas previas a la toma de la muestra. Mantener a temperatura ambiente." },
{ nombre: "Líquido Cefalorraquídeo Bacteriológico (LCR)", area: "Microbiología", muestra: "Líquido Cefalorraquídeo", tubo: "Tubo estéril de punción", toma: "Punción lumbar (Médica)", urgencia: "Alta", ayuno: "No aplica", centrifugar: "No", separar: "No", procesamiento: "Inmediato", obs: "URGENCIA BIOLÓGICA: Traer inmediatamente al laboratorio. Mantener a temperatura ambiente. NO REFRIGERAR (salvo sospecha viral o micótica específica)." },
{ nombre: "Líquidos Biológicos de Punción (PLE / ASCÍTICO / PERICARDIO / ARTICULAR)", area: "Microbiología", muestra: "Líquido Pleural, Ascítico, Pericárdico, Sinovial", tubo: "Jeringa o Frasco de Hemocultivo / Tubo estéril", toma: "Punción estéril ecoguíada (Médica)", urgencia: "Alta", ayuno: "No aplica", centrifugar: "No", separar: "No", procesamiento: "Inmediato", obs: "Traer inmediatamente. Conservar a temperatura ambiente." },
{ nombre: "Cultivos de Tejidos y Quirúrgicos (ÓSEO / MUSCULAR / BLANDAS / PLACENTA / VÁLVULAS)", area: "Microbiología", muestra: "Tejido, hueso, músculo, restos trofoblásticos, córnea", tubo: "Frasco estéril con solución fisiológica estéril (pocas gotas) o jeringa", toma: "Muestra quirúrgica o biopsia (Médica)", urgencia: "Alta", ayuno: "No aplica", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Mantener a temperatura ambiente para bacteriología. No dejar secar la muestra." },
{ nombre: "Punción Aspiración de Heridas / Abscesos / Celulitis / Pie Diabético (PAS)", area: "Microbiología", muestra: "Pus / Material aspirado profundo", tubo: "Jeringa tapada (sin aguja) o frasco estéril", toma: "Aspiración con aguja de bordes profundos de la lesión", urgencia: "Alta", ayuno: "No requiere", centrifugar: "No", separar: "No", procesamiento: "Inmediato", obs: "CRÍTICO: El hisopado superficial no sirve (se contamina con flora de piel). Conservar a temperatura ambiente y traer urgente." },
{ nombre: "Punta de Catéter / Marcapaso", area: "Microbiología", muestra: "Segmento de catéter distal (5 cm)", tubo: "Frasco Estéril Seco", toma: "Retiro aséptico de catéter y corte con tijera estéril", urgencia: "Media", ayuno: "No aplica", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Conservar a temperatura ambiente o heladera." },
{ nombre: "Secreciones Respiratorias / Esputo / BAL / Mini BAL (RES / BRO / TRA)", area: "Microbiología", muestra: "Esputo, Lavado Broncoalveolar, Aspirado Traqueal", tubo: "Frasco estéril de boca ancha", toma: "Expectoración profunda matutina (no saliva) o aspirado clínico", urgencia: "Media", ayuno: "Ayuno de 8 hs (Higiene bucal previa solo con agua)", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Conservar en heladera hasta su transporte inmediato al laboratorio." },
{ nombre: "Micosis Superficiales: Directo y Cultivo (SUPD / SUPC)", area: "Microbiología", muestra: "Piel, Uñas, Cuero cabelludo, Hisopados de mucosa", tubo: "Placas de Petri o frascos estériles secos / Hisopo seco", toma: "Raspado de escamas o detritus ungueal por personal entrenado", urgencia: "Baja", ayuno: "No requiere", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "PREPARACIÓN: Piel/Pelo: Lavar con jabón blanco, sin cremas ni talcos. Uñas: Cepillar 3 días antes, suspender cremas/talcos, sin esmalte. Concurrir con zapatos cerrados y medias. Suspender antifúngico local 1 semana y oral 1 mes antes." },
{ nombre: "Micosis Profundas: Directo y Cultivo (PRFD / PRFC)", area: "Microbiología", muestra: "Esputo, LBA, Aspirado, Biopsias, Líquidos, Hemocultivo x lisis", tubo: "Frasco estéril / Tubo de lisis centrifugación", toma: "Muestras clínicas profundas, respiratorias o quirúrgicas", urgencia: "Alta", ayuno: "Según tipo de muestra", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Investigación de hongos dimórficos o levaduras oportunistas. Conservar muestras respiratorias refrigeradas." },
{ nombre: "Tinta China (Tchina)", area: "Microbiología", muestra: "Líquido Cefalorraquídeo (LCR)", tubo: "Tubo estéril de punción", toma: "Punción lumbar (Médica)", urgencia: "Alta", ayuno: "No aplica", centrifugar: "No", separar: "No", procesamiento: "Inmediato", obs: "Búsqueda directa de Cryptococcus neoformans. Traer urgente. Conservar a temperatura ambiente." },
{ nombre: "Serología para Micosis Profundas (*mprof)", area: "Microbiología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Especial", obs: "Detección de anticuerpos contra Aspergillus, Histoplasma, Paracoccidioides. OBLIGATORIO: Solicitar y adjuntar planilla epidemiológica del sector." },
{ nombre: "Antígenos de Galactomananos (galacto)", area: "Microbiología", muestra: "Suero o LBA (Lavado Broncoalveolar)", tubo: "Rojo/Amarillo o Frasco Estéril", toma: "Punción venosa / Procedimiento médico", urgencia: "Alta", ayuno: "8 hs (para suero)", centrifugar: "Sí (Suero)", separar: "Sí (Suero)", procesamiento: "Especial", obs: "CRÍTICO: Pacientes neutropénicos febriles. Solo se recibe con la firma y autorización obligatoria del servicio de INFECTOLOGÍA." },
{ nombre: "Antigenuria de Histoplasma (aghisto)", area: "Microbiología", muestra: "Orina (Chorro Medio)", tubo: "Frasco Estéril", toma: "Primera orina de la mañana con 4 hs de retención mínima", urgencia: "Alta", ayuno: "No requiere", centrifugar: "No", separar: "No", procesamiento: "Especial", obs: "CRÍTICO: Enviar muestra refrigerada de forma inmediata. Solo se recibe con la firma y autorización obligatoria del servicio de INFECTOLOGÍA." },
{ nombre: "Antígeno de Cryptococcus (agcrypto)", area: "Microbiología", muestra: "Suero o LCR", tubo: "Rojo/Amarillo o Tubo Estéril", toma: "Punción venosa / Punción lumbar", urgencia: "Alta", ayuno: "8 hs (para suero)", centrifugar: "Sí (Suero)", separar: "Sí (Suero)", procesamiento: "Especial", obs: "CRÍTICO: Orientado a pacientes con VIH o inmunodeprimidos. Solo se recibe con la firma y autorización obligatoria del servicio de INFECTOLOGÍA." },
{ nombre: "Sensibilidad a Antifúngicos en Levaduras (ATF)", area: "Microbiología", muestra: "Cepas de levaduras aisladas (Candida spp.)", tubo: "Tubo con medio de cultivo de aislamiento", toma: "Derivación interna de colonia positiva", urgencia: "Baja", ayuno: "No aplica", centrifugar: "No", separar: "No", procesamiento: "Especial", obs: "Estudio de resistencia auxanográfica o automatizada sobre aislamientos microbiológicos previos." } // 
]; // 
  
// =========================================================================

// Glosario extendido para las consultas del Diccionario Médico Dinámico (ícono info)
const glosarioPerfiles = {
  "Hemograma Completo": "Estudio cuantitativo y cualitativo que evalúa las tres líneas celulares principales de la sangre: eritrocitaria (glóbulos rojos), leucocitaria (glóbulos blancos) y trombocitaria (plaquetas). Es crucial para diagnosticar anemias, procesos infecciosos y trastornos mielo/linfoproliferativos.",
  "Eritrosedimentación (VSG)": "Prueba que mide la velocidad con la que los hematíes se asientan en el plasma en un período de tiempo determinado (mm/h). Es un marcador inespecífico de fase aguda, indicador de procesos inflamatorios, infecciosos o neoplásicos activos.",
  "Glucemia": "Dosaje de la concentración de glucosa libre en plasma. Parámetro fundamental e indispensable para el diagnóstico, tamizaje y seguimiento clínico de la Diabetes Mellitus y otros trastornos del metabolismo de los carbohidratos.",
  "Uremia": "Medición cuantitativa de la urea en sangre, principal residuo nitrogenado derivado del catabolismo de las proteínas. Utilizado como indicador de aclaramiento rápido de la función excretora renal y del equilibrio hidroelectrolítico.",
  "Creatinemia": "Evaluación sérica del desecho metabólico de la creatina muscular. Debido a su tasa de filtración constante y escasa dependencia de factores externos, representa el indicador bioquímico estándar más confiable para estimar la tasa de filtrado glomerular.",
  "Hepatograma Completo": "Conjunto integrado de determinaciones bioquímicas enzimáticas y pigmentarias que incluye: Bilirrubina Total, Directa e Indirecta, Transaminasas (TGO/AST y TGP/ALT) y Fosfatasa Alcalina (FAL). Permite evaluar de forma masiva la integridad celular hepática y permeabilidad de la vía biliar.",
  "Perfil Lipídico": "Evaluación del perfil graso circulante que comprende el Colesterol Total, Colesterol HDL (alta densidad), Colesterol LDL (baja densidad) y Triglicéridos. Esencial para la estratificación del riesgo cardiometabólico y dislipemias.",
  "Orina Completa": "Análisis integral que consta de tres fases: examen físico (aspecto, color, densidad), examen químico macroscópico (pH, proteínas, glucosa, cuerpos cetónicos, hemoglobina) y el análisis microscópico del sedimento centrifugado para identificar células, cilindros, cristales y bacterias.",
  "Proteinograma Electroforético": "Técnica cuali-cuantitativa que separa las fracciones de proteínas plasmáticas (Albúmina, Alfa-1, Alfa-2, Beta y Gamma globulinas) mediante migración en un campo eléctrico. Clave en el diagnóstico de gammapatías monoclonales (Mieloma Múltiple) e inflamaciones crónicas.",
  "Ionograma Plasmático (Na, K, Cl)": "Medición de los principales electrolitos (Sodio, Potasio y Cloro) disueltos en el plasma sanguíneo. Vital para vigilar la homeostasis osmótica celular, la transmisión del impulso nervioso, la función muscular y el ritmo de conducción cardíaca.",
  "Tiempo de Protrombina (TP / RIN)": "Prueba funcional que evalúa de forma extrínseca la cascada de la coagulación plasmática. Se expresa en porcentaje de actividad y en RIN (Razón Internacional Normatizada) para estandarizar el monitoreo de pacientes anticoagulados oralmente. Fundamental en prequirúrgicos.",
  "KPTT": "Tiempo de Tromboplastina Parcial Activada. Evalúa de manera global los factores involucrados en la vía intrínseca y común de la coagulación de la sangre. Utilizado en el screening preoperatorio y el control de terapias con heparina no fraccionada.",
  "Grupo y Factor Rh": "Determinación aglutinante inmunológica de los antígenos eritrocitarios de los sistemas ABO y Rh (Antígeno D) en la membrana de los glóbulos rojos. Crucial para la seguridad transfusional y la prevención de la enfermedad hemolítica fetomaterna.",
  "VDRL": "Prueba serológica no treponémica de floculación utilizada para el cribado masivo y seguimiento terapéutico de la infección por Sífilis (Treponema pallidum). Obligatoria en el control prenatal.",
  "Toxoplasmosis (IgG e IgM)": "Determinación de anticuerpos séricos específicos dirigidos contra el parásito Toxoplasma gondii. Permite diferenciar entre una infección pasada (inmunidad) o una infección aguda activa con riesgo de transmisión congénita.",
  "Chagas (Serología)": "Tamizaje serológico inmunológico para detectar anticuerpos circulantes contra el Trypanosoma cruzi. Es de notificación y control obligatorio en mujeres gestantes de zonas endémicas.",
  "HIV (Anticuerpos/Antígeno)": "Prueba de tamizaje de cuarta generación que detecta simultáneamente anticuerpos contra el Virus de la Inmunodeficiencia Humana (HIV-1 y HIV-2) y el antígeno de cápside p24, reduciendo drásticamente el período de ventana diagnóstica.",
  "HBsAg (Hepatitis B)": "Detección del Antígeno de Superficie del virus de la Hepatitis B. Es el marcador serológico de elección en primera instancia para determinar una infección activa (tanto aguda como crónica) por este virus.",
  "Clearence de Creatinina (Orina 24 hs)": "Prueba depurativa dinámica comparativa entre la creatinina sérica y la eliminada en una recolección exacta de orina de 24 horas. Proporciona una medición precisa del aclaramiento renal real.",
  "Troponina T o I (Alta Sensibilidad)": "Biomarcador proteico cardíaco de liberación ultra-específica. Su detección cuantitativa elevada en plasma indica de forma directa lesión o necrosis celular del miocardio (Infarto Agudo de Miocardio).",
  "Ferremia (Hierro Sérico)": "Medición del hierro elemental que se encuentra circulando en el plasma, firmemente acoplado a su proteína transportadora específica (transferrina).",
  "Ferritina Sérica": "Determinación macromolecular que cuantifica el nivel de la principal proteína de almacenamiento intracelular de hierro. Se considera el reflejo más exacto y fiel de las reservas de hierro totales del organismo.",
  "Proteína C Reactiva (PCR) Cuantitativa": "Reactante de fase aguda sintetizado por el hígado en respuesta a estímulos inflamatorios. Su aumento es drástico y veloz frente a injuria tisular, infecciones bacterianas o brotes de patologías autoinmunes.",
  "Factor Reumatoideo (Látex AR)": "Autoanticuerpo (habitualmente IgM) dirigido contra la fracción Fc de las inmunoglobulinas IgG propias del organismo. Marcador clásico de screening inmunológico para el diagnóstico de Artritis Reumatoidea.",
  "Anticuerpos Anti-Transglutaminasa Tisular IgA": "Marcador serológico inmunológico de clase IgA dirigido contra la enzima transglutaminasa. Posee el mayor valor predictivo y especificidad para el diagnóstico no invasivo de la Enfermedad Celíaca.",
  "IgA Sérica Total": "Cuantificación de la inmunoglobulina A basal en suero. Se solicita de rutina junto al panel celíaco para descartar una deficiencia selectiva de IgA, anomalía genética que genera falsos negativos en las pruebas serológicas específicas.",
  "TSH (Hormona Estimulante de Tiroides)": "Hormona hipofisaria que regula la producción de hormonas tiroideas. Es el indicador más sensible para detectar disfunciones sutiles de la glándula tiroides.",
  "T4 Libre (Tiroxina Libre)": "Fracción activa de la principal hormona tiroidea, no unida a proteínas. Muestra la disponibilidad real de hormona a nivel celular.",
  "Procalcitonina (PCT)": "Biomarcador proteico que se eleva drásticamente ante infecciones bacterianas sistémicas severas. Útil para diferenciar inflamación bacteriana de viral y monitorear la sepsis.",
  "Albúmina Sérica": "La proteína más abundante del plasma, sintetizada por el hígado. Su medición es clave para evaluar el estado nutricional crónico y la presión oncótica vascular.",
  "Calcemia Total e Iónica": "El calcio total mide el ion unido a proteínas y libre; el calcio iónico mide únicamente la fracción libre y biológicamente activa, crítica en emergencias metabólicas.",
  "Hemoglobina Glicosilada (HbA1c)": "Fracción de la hemoglobina unida a la glucosa de forma irreversible por glicación. Determina de manera retrospectiva el promedio de control glucémico real del paciente durante los últimos 90 días (vida media del eritrocito)."
};

// Matriz estructural de perfiles basados en el nomenclador IDAC con sus desgloses formativos
const listaPerfiles = [
  { 
    nombre: "Perfil General de Salud (Básico)", 
    analisis: [
      { estudio: "Hemograma Completo", detalle: "Evalúa glóbulos rojos, blancos y plaquetas." },
      { estudio: "Eritrosedimentación (VSG)", detalle: "Marcador inespecífico de inflamación o infección activa." },
      { estudio: "Glucemia", detalle: "Medición de glucosa basal en plasma para screening de diabetes." },
      { estudio: "Uremia", detalle: "Evalúa el residuo del metabolismo proteico y función renal rápida." },
      { estudio: "Creatinemia", detalle: "Indicador sérico más confiable del filtrado glomerular renal." },
      { estudio: "Hepatograma Completo", detalle: "Evalúa enzimas hepáticas y bilirrubinas para ver la integridad del hígado." },
      { estudio: "Perfil Lipídico", detalle: "Incluye Colesterol Total, HDL, LDL y Triglicéridos (Riesgo cardíaco)." },
      { estudio: "Orina Completa", detalle: "Análisis físico-químico y del sedimento urinario microscópico." }
    ], 
    obs: "Rutina anual estándar para la valoración del estado metabólico, renal y hepático basal." 
  },
  { 
    nombre: "Perfil Prequirúrgico", 
    analisis: [
      { estudio: "Hemograma Completo", detalle: "Control de recuento celular y descarte de anemias previas a quirófano." },
      { estudio: "Glucemia", detalle: "Monitoreo metabólico para prever complicaciones de cicatrización." },
      { estudio: "Uremia", detalle: "Evaluación renal rápida previa a la administración de anestésicos." },
      { estudio: "Grupo y Factor Rh", detalle: "Determinación inmunológica crítica ante la necesidad de transfusión." },
      { estudio: "Tiempo de Protrombina (TP / RIN)", detalle: "Evalúa la vía extrínseca de la coagulación. Vital para prevenir sangrados." },
      { estudio: "KPTT", detalle: "Tiempo de Tromboplastina Parcial Activada (Vía intrínseca de la coagulación)." },
      { estudio: "Orina Completa", detalle: "Descarte de infecciones urinarias subclínicas previas a la cirugía." }
    ], 
    obs: "Estudio crítico preoperatorio para evaluar la hemostasia y descartar riesgos hemodinámicos." 
  },
  { 
    nombre: "Perfil Inicial Embarazo", 
    analisis: [
      { estudio: "Hemograma Completo", detalle: "Control estricto de la anemia fisiológica del embarazo." },
      { estudio: "Glucemia", detalle: "Screening inicial para la detección temprana de diabetes gestacional." },
      { estudio: "Grupo y Factor Rh", detalle: "Crucial para detectar incompatibilidad feto-materna (Coombs indirecta)." },
      { estudio: "VDRL", detalle: "Prueba serológica obligatoria para el descarte de Sífilis." },
      { estudio: "Toxoplasmosis (IgG e IgM)", detalle: "Monitoreo de anticuerpos contra el parásito Toxoplasma gondii." },
      { estudio: "Chagas (Serología)", detalle: "Tamizaje obligatorio por ley para vigilar la transmisión vertical." },
      { estudio: "HIV (Anticuerpos/Antígeno)", detalle: "Screening obligatorio para activar protocolo de prevención de transmisión vertical." },
      { estudio: "HBsAg (Hepatitis B)", detalle: "Detección del antígeno de superficie del virus de la Hepatitis B." },
      { estudio: "Orina Completa", detalle: "Screening de bacteriuria asintomática (causa común de parto prematuro)." }
    ], 
    obs: "Screening preventivo obligatorio del primer trimestre para el control materno-fetal." 
  },
  { 
    nombre: "Perfil Hepático", 
    analisis: [
      { estudio: "Hepatograma Completo", detalle: "Incluye Bilirrubinas (T/D/I), Transaminasas (TGO/TGP) y FAL (Fosfatasa Alcalina)." },
      { estudio: "Proteinograma Electroforético", detalle: "Mide Albúmina y Globulinas. Clave para ver la capacidad de síntesis del hígado." },
      { estudio: "Tiempo de Protrombina (TP)", detalle: "Los factores de coagulación se de síntesis hepática; un TP alterado evalúa daño crónico." },
      { estudio: "HBsAg (Hepatitis B)", detalle: "Tamizaje para descartar infecciones por virus de Hepatitis B como causa de la injuria." }
    ], 
    obs: "Diseñado para el estudio de hepatopatías crónicas, capacidad de síntesis macromolecular y serologías virales." 
  },
  { 
    nombre: "Perfil Renal", 
    analisis: [
      { estudio: "Uremia", detalle: "Evaluación de la concentración de urea derivada del catabolismo de proteínas." },
      { estudio: "Creatinemia", detalle: "Metabolito constante de la masa muscular filtrado de forma pura por el riñón." },
      { estudio: "Ionograma Plasmático (Na, K, Cl)", detalle: "Control de electrolitos esenciales regulados por los túbulos renales." },
      { estudio: "Clearence de Creatinina (Orina 24 hs)", detalle: "Prueba depurativa cuantitativa exacta para medir la tasa de filtrado glomerular." },
      { estudio: "Orina Completa", detalle: "Busca proteinuria, hematuria o cilindros que indiquen daño en la nefrona." }
    ], 
    obs: "Evaluación integral del filtrado glomerular, capacidad de depuración celular y balance hidroelectrolítico." 
  },
  { 
    nombre: "Perfil Cardíaco (Urgencia)", 
    analisis: [
      { estudio: "Troponina T o I (Alta Sensibilidad)", detalle: "Biomarcador de elección. Su elevación indica necrosis celular miocárdica (Infarto)." },
      { estudio: "Ionograma Plasmático (Na, K, Cl)", detalle: "Control crítico del Potasio y Sodio (Alteraciones causan arritmias letales)." },
      { estudio: "Hemograma Completo", detalle: "Evaluación urgente de glóbulos rojos (Descarte de shock hipovolémico o anemia severa)." },
      { estudio: "Glucemia", detalle: "Control metabólico rápido originado por respuestas de estrés celular agudo." }
    ], 
    obs: "Algoritmo de exclusión rápida en servicios de guardia ante sospecha de síndrome coronario agudo." 
  },
  { 
    nombre: "Perfil de Anemias", 
    analisis: [
      { estudio: "Hemograma Completo", detalle: "Informa Índices Hematimétricos (VCM, HCM, CHCM) para clasificar la anemia." },
      { estudio: "Eritrosedimentación (VSG)", detalle: "Ayuda a diferenciar anemias por procesos inflamatorios crónicos." },
      { estudio: "Ferremia (Hierro Sérico)", detalle: "Mide el hierro circulante unido a la transferrina en el plasma." },
      { estudio: "Ferritina Sérica", detalle: "El parámetro más fiel para conocer los depósitos reales de hierro en el organismo." }
    ], 
    obs: "Diagnóstico diferencial clínico de anemias microcíticas, macrocíticas o de procesos crónicos." 
  },
  { 
    nombre: "Perfil Diabético", 
    analisis: [
      { estudio: "Glucemia", detalle: "Evaluación del estado de la glucosa libre basal en plasma." },
      { estudio: "Hemoglobina Glicosilada (HbA1c)", detalle: "Muestra el promedio retrospectivo del control glucémico de los últimos 90 días." },
      { estudio: "Creatinemia", detalle: "Monitoreo de seguridad para detectar indicios tempranos de nefropatía diabética." },
      { estudio: "Perfil Lipídico", detalle: "Control de Triglicéridos y LDL, alterados comúnmente por la dislipidemia diabética." },
      { estudio: "Orina Completa", detalle: "Busca escape de proteínas mínimas indicando daño vascular renal temprano." }
    ], 
    obs: "Seguimiento metabólico estricto y prevención de micro/macroangiopatías secundarias." 
  },
  { 
    nombre: "Perfil Reumático", 
    analisis: [
      { estudio: "Hemograma Completo", detalle: "Busca anemia de procesos crónicos o leucopenia asociadas a enfermedades autoinmunes." },
      { estudio: "Eritrosedimentación (VSG)", detalle: "Mide la velocidad de caída eritrocitaria, muy elevada en brotes reumáticos." },
      { estudio: "Proteína C Reactiva (PCR) Cuantitativa", detalle: "Reactante de fase aguda que marca inflamación tisular con alta velocidad de respuesta." },
      { estudio: "Factor Reumatoideo (Látex AR)", detalle: "Prueba serológica de screening dirigida contra autoanticuerpos específicos." },
      { estudio: "Proteinograma Electroforético", detalle: "Evalúa el aumento de las gammaglobulinas (hipergammaglobulinemia policlonal)." }
    ], 
    obs: "Screening de laboratorio frente a sospechas de colagenopatías o procesos autoinmunes articulares." 
  },
  { 
    nombre: "Perfil Celíaco", 
    analisis: [
      { estudio: "Anticuerpos Anti-Transglutaminasa Tisular IgA", detalle: "Inmunoserología de elección por su altísima sensibilidad y especificidad diagnóstica." },
      { estudio: "IgA Sérica Total", detalle: "Obligatorio para descartar deficiencia congénita de IgA que dé falsos negativos." },
      { estudio: "Hemograma Completo", detalle: "Control de anemias por malabsorción intestinal de nutrientes de la dieta." },
      { estudio: "Ferremia (Hierro Sérico)", detalle: "Evalúa si hay ferropenia instalada por atrofia de las vellosidades del duodeno." }
    ], 
    obs: "Panel serológico inicial para la detección y monitoreo de enteropatías sensibles al gluten." 
  },
  { 
    nombre: "Perfil Tiroideo", 
    analisis: [
      { estudio: "TSH (Hormona Estimulante de Tiroides)", detalle: "Marcador ultrasensible de primera línea para evaluar el eje tiroideo." },
      { estudio: "T4 Libre (Tiroxina Libre)", detalle: "Evalúa la fracción biológicamente activa de la hormona circulante." },
      { estudio: "T3 Total", detalle: "Útil en casos específicos de sospecha de T3-toxicosis." },
      { estudio: "Anticuerpos Anti-TPO / Anti-TG", detalle: "Dosaje inmunológico para confirmar etiología autoinmune (Hashimoto/Graves)." }
    ], 
    obs: "Evaluación integral del eje hipotálamo-hipófiso-tiroideo ante sospechas de hipo o hipertiroidismo." 
  },
  { 
    nombre: "Perfil Hipertensivo / Riesgo Vascular", 
    analisis: [
      { estudio: "Ionograma Plasmático", detalle: "Control del Sodio y Potasio (Clave si se usan diuréticos)." },
      { estudio: "Creatinemia y Uremia", detalle: "Monitoreo del daño blanco renal secundario a la presión arterial elevada." },
      { estudio: "Ácido Úrico", detalle: "Marcador metabólico y de riesgo cardiovascular independiente." },
      { estudio: "Microalbuminuria en Orina", detalle: "Detecta daño endotelial renal incipiente en pacientes hipertensos." },
      { estudio: "Perfil Lipídico", detalle: "Estratificación del riesgo aterogénico general del paciente." }
    ], 
    obs: "Monitoreo de órganos blanco y factores metabólicos agravantes en el paciente hipertenso crónico." 
  },
  { 
    nombre: "Perfil Infeccioso Respiratorio / Febril", 
    analisis: [
      { estudio: "Hemograma Completo", detalle: "Evalúa leucocitosis, neutrofilia o linfocitosis para orientar origen viral o bacteriano." },
      { estudio: "Proteína C Reactiva (PCR) Cuantitativa", detalle: "Reactante de fase aguda para medir la intensidad de la respuesta inflamatoria." },
      { estudio: "Procalcitonina (PCT)", detalle: "Biomarcador ultra-específico de sepsis y severidad de infecciones bacterianas." },
      { estudio: "Hemocultivos (Por par)", detalle: "Cultivo microbiológico para aislamiento de patógenos en sangre (Bacteriemia)." }
    ], 
    obs: "Panel de screening rápido para guiar la conducta terapéutica antibiótica en cuadros febriles agudos." 
  },
  { 
    nombre: "Perfil Nutricional / Adulto Mayor", 
    analisis: [
      { estudio: "Hemograma Completo", detalle: "Screening de anemias carenciales (ferropénica o megaloblástica)." },
      { estudio: "Albúmina Sérica", detalle: "Proteína marcadora del estado de nutrición y reserva proteica a mediano plazo." },
      { estudio: "Vitamina B12 y Ácido Fólico", detalle: "Esenciales para la maduración celular y función neurológica." },
      { estudio: "Ferremia y Ferritina", detalle: "Evaluación de los depósitos corporales de hierro molecular." },
      { estudio: "Colesterol Total", detalle: "Valores críticamente bajos en adultos mayores pueden indicar desnutrición severa." }
    ], 
    obs: "Valoración del estado carencial, metabólico y de síntesis proteica en pacientes con sospecha de malnutrición." 
  },
  { 
    nombre: "Perfil Óseo / Fosfocálcico", 
    analisis: [
      { estudio: "Calcemia Total e Iónica", detalle: "Medición del calcio en sangre, crítico para la función neuromuscular y ósea." },
      { estudio: "Fosfatemia", detalle: "Evaluación del fósforo sérico, estrechamente regulado junto al calcio." },
      { estudio: "Fosfatasa Alcalina Total (FAL)", detalle: "Fracción enzimática aumentada en procesos de alta remodelación ósea." },
      { estudio: "Vitamina D (25-OH D)", detalle: "Hormona clave para la absorción intestinal de calcio y la salud mineral ósea." }
    ], 
    obs: "Estudio del metabolismo mineral para el diagnóstico de osteoporosis, osteomalacia o hiperparatiroidismo." 
  }
];

// 1. INICIALIZADOR DE EVENTOS DE INTERFAZ
document.addEventListener("DOMContentLoaded", () => {
    // Escondemos el bloque visual contenedor de perfiles al arrancar la app
    const perfilesSec = document.querySelector('.perfiles-section');
    if (perfilesSec) perfilesSec.style.display = 'none';

    // Construimos la estructura oculta en memoria del DOM
    construirTarjetasPerfiles();

    // Comportamiento inteligente cruzado del selector de SECTORES TRADICIONALES
    document.getElementById("areaSelect").addEventListener("change", () => {
        if(document.getElementById("areaSelect").value !== "") {
            document.getElementById("perfilSelect").value = ""; // Limpia perfiles
        }
        render();
    });

    // Comportamiento inteligente cruzado del selector de PERFILES COMPUESTOS
    document.getElementById("perfilSelect").addEventListener("change", () => {
        if(document.getElementById("perfilSelect").value !== "") {
            document.getElementById("areaSelect").value = "";   // Limpia sectores
            document.getElementById("searchInput").value = "";  // Limpia barra texto
        }
        render();
    });

    render();
});

// 2. FUNCIÓN DE RENDERIZADO CENTRALIZADA 
function render() {
    const list = document.getElementById("examList");
    const perfilesSec = document.querySelector('.perfiles-section');
    const search = document.getElementById("searchInput").value.toLowerCase();
    const areaFilter = document.getElementById("areaSelect").value;
    const perfilFilter = document.getElementById("perfilSelect").value;
    
    // Limpieza total preventiva de bloques dinámicos
    list.innerHTML = "";
    if (perfilesSec) perfilesSec.style.display = 'none';

    // RUTA A: Si el alumno eligió un Perfil del menú desplegable secundario
    if (perfilFilter !== "") {
        if (perfilesSec) perfilesSec.style.display = 'block';
        mostrarSoloPerfilSeleccionado(perfilFilter);
        return; 
    }

    // Si la pantalla de inicio no tiene entradas de filtros ni texto, se congela vacía
    if (search.trim() === "" && areaFilter === "") return;

    // RUTA B: Procesamiento regular y filtrado de determinaciones individuales
    const filtered = determinaciones.filter(d => {
        const matchText = d.nombre.toLowerCase().includes(search);
        const matchArea = areaFilter === "" || d.area === areaFilter;
        return matchText && matchArea;
    });

    filtered.forEach(d => {
        const li = document.createElement("li");
        let claseTubo = "color-rojo";
        const tuboTexto = (d.tubo || "").toLowerCase();
        
        if (tuboTexto.includes("lila") || tuboTexto.includes("edta")) claseTubo = "color-lila";
        else if (tuboTexto.includes("celeste") || tuboTexto.includes("citrato 1:9")) claseTubo = "color-celeste";
        else if (tuboTexto.includes("negro") || tuboTexto.includes("citrato 1:4")) claseTubo = "color-negro";
        else if (tuboTexto.includes("verde") || tuboTexto.includes("heparina")) claseTubo = "color-verde";
        else if (tuboTexto.includes("frasco") || tuboTexto.includes("estéril") || tuboTexto.includes("materia")) claseTubo = "color-esteril";

        const nivelUrgencia = d.urgencia ? d.urgencia.toLowerCase() : "baja";
        const claseUrgencia = `urgencia-${nivelUrgencia}`;

        li.innerHTML = `
            <div class="wrapper-izquierdo">
                <span class="tubo-color ${claseTubo}"></span>
                <div>
                    <strong style="display: inline-block; margin-bottom: 2px;">${d.nombre}</strong>
                    <span class="badge ${claseUrgencia}">${d.urgencia || 'Rutina'}</span>
                    <br><small style="color: #64748b; font-weight: 500;"><i class="fas fa-tags" style="font-size:0.75rem;"></i> ${d.area}</small>
                </div>
            </div>
            <i class="fas fa-chevron-right" style="color: #cbd5e1; font-size: 0.9rem;"></i>
        `;
        
        li.onclick = () => mostrarDetalle(d);
        list.appendChild(li);
    });
}

// 3. GENERADOR DINÁMICO DE TARJETAS DE PERFILES CON DESGLOSE FORMATIVO
function construirTarjetasPerfiles() {
    const perfilesGrid = document.getElementById('perfiles-grid');
    if (!perfilesGrid) return;
    perfilesGrid.innerHTML = "";

    listaPerfiles.forEach((p) => {
        const card = document.createElement('div');
        card.className = 'perfil-card';
        card.setAttribute('data-nombre-perfil', p.nombre);
        
        // Mapeamos los sub-análisis construyendo la sub-estructura con sus definiciones directas
        const itemsHTML = p.analisis.map(item => {
            return `
                <li class="perfil-li" style="display: flex; flex-direction: column; align-items: flex-start; padding: 10px; border-bottom: 1px solid #f1f5f9;">
                    <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
                        <span style="font-weight: 600; color: #1e293b; font-size: 0.92rem;">${item.estudio}</span>
                        <button class="info-btn-perfil" data-item="${item.estudio}" title="Ver definición del glosario" style="background: none; border: none; color: #0284c7; cursor: pointer; padding: 2px 6px;">
                            <i class="fas fa-info-circle"></i>
                        </button>
                    </div>
                    <small style="color: #64748b; font-size: 0.8rem; margin-top: 3px; font-weight: 400; line-height: 1.3;">
                        <i class="fas fa-angle-right" style="color: #cbd5e1; margin-right: 4px;"></i> ${item.detalle}
                    </small>
                </li>`;
        }).join('');

        card.innerHTML = `
            <div>
                <h3 style="background-color: #f8fafc; padding: 12px; margin: 0; font-size: 1.05rem; font-weight: 700; color: #0f172a; border-bottom: 2px solid #e2e8f0; border-top-left-radius: 14px; border-top-right-radius: 14px;"><i class="fas fa-layer-group" style="color: #0284c7; margin-right: 8px;"></i>${p.nombre}</h3>
                <ul class="perfil-ul" style="list-style: none; padding: 0; margin: 0;">${itemsHTML}</ul>
            </div>
            <div class="perfil-obs" style="padding: 12px; background-color: #f0fdf4; border-top: 1px solid #dcfce7; font-size: 0.82rem; color: #166534; border-bottom-left-radius: 14px; border-bottom-right-radius: 14px;"><strong>Utilidad Clínica:</strong> ${p.obs}</div>
        `;
        perfilesGrid.appendChild(card);
    });
}

// 4. AISLADOR DE SELECCIÓN DE PERFIL
function mostrarSoloPerfilSeleccionado(nombrePerfilElegido) {
    const cards = document.querySelectorAll('.perfil-card');
    cards.forEach(card => {
        const nombreCard = card.getAttribute('data-nombre-perfil');
        if (nombreCard === nombrePerfilElegido) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// 5. DETALLE DE MODAL CON SISTEMA DE PESTAÑAS (Para determinaciones individuales)
function mostrarDetalle(d) {
    const modal = document.getElementById("modal");
    const modalData = document.getElementById("modalData");
    
    const centrifugado = d.centrifugar ? d.centrifugar : "No requiere / No especifica";
    const separacion = d.separar ? d.separar : "No requiere / No especifica";

    let claseTuboModal = "color-rojo";
    const tTexto = (d.tubo || "").toLowerCase();
    if (tTexto.includes("lila") || tTexto.includes("edta")) claseTuboModal = "color-lila";
    else if (tTexto.includes("celeste")) claseTuboModal = "color-celeste";
    else if (tTexto.includes("negro")) claseTuboModal = "color-negro";
    else if (tTexto.includes("verde")) claseTuboModal = "color-verde";
    else if (tTexto.includes("frasco") || tTexto.includes("estéril") || tTexto.includes("materia")) claseTuboModal = "color-esteril";

    modalData.innerHTML = `
        <div class="modal-header-analisis">
            <h2 class="modal-title">${d.nombre}</h2>
            <div style="display: flex; gap: 12px; align-items: center; margin-top: 6px; flex-wrap: wrap;">
                <span class="modal-sector">${d.area}</span>
                <span style="font-size: 0.85rem; font-weight: 700; color: #475569; display: inline-flex; align-items: center;">
                    <span class="tubo-color ${claseTuboModal}" style="margin-right: 6px;"></span> 
                    ${d.tubo}
                </span>
            </div>
        </div>

        <div class="modal-tabs">
            <button class="tab-btn active tab-paciente" onclick="cambiarPestaña('paciente')">
                <i class="fas fa-user"></i> Paciente
            </button>
            <button class="tab-btn tab-tecnico" onclick="cambiarPestaña('tecnico')">
                <i class="fas fa-flask"></i> Técnico
            </button>
        </div>

        <div id="tab-paciente-content" class="tab-content active">
            <div class="seccion-modal-paciente">
                <h3 class="modal-subtitulo paciente"><i class="fas fa-user-check"></i> Preparación y Ayuno</h3>
                <p class="modal-texto">
                    <strong>Ayuno requerido:</strong> ${d.ayuno || "No requiere ayuno."}<br><br>
                    ${d.prepPaciente || `${d.toma} ${d.ayuno || ''}`}
                </p>
            </div>
        </div>

        <div id="tab-tecnico-content" class="tab-content">
            <div class="seccion-modal-tecnico">
                <h3 class="modal-subtitulo tecnico"><i class="fas fa-vial"></i> Control de Procesamiento</h3>
                <p class="modal-texto">
                    <strong>Muestra biológica:</strong> ${d.muestra}<br>
                    <strong>Centrifugar:</strong> ${centrifugado}<br>
                    <strong>Separar suero/plasma:</strong> ${separacion}<br>
                    <strong>Estabilidad / Conservación:</strong> ${d.procesamiento || "No especifica."}
                </p>
                ${d.obsTecnicas || d.obs ? `
                    <div class="alerta-tecnica" style="margin-top: 12px; background-color: #fffbeb; border: 1px solid #fef3c7; color: #92400e; font-size: 0.8rem; padding: 10px; border-radius: 8px;">
                        <i class="fas fa-exclamation-triangle"></i> <strong>Manejo de Mesada:</strong> ${d.obsTecnicas || d.obs}
                    </div>
                ` : ''}
            </div>
        </div>

        <button onclick='agregarAlPedido(${JSON.stringify(d).replace(/"/g, '&quot;')})' class="btn-whatsapp-premium" style="background-color: var(--primary);">
            <i class="fas fa-plus"></i> Añadir a la Orden de WhatsApp
        </button>
    `;
    modal.style.display = "flex";
}

function cambiarPestaña(tipo) {
    const btnPaciente = document.querySelector('.tab-btn.tab-paciente');
    const btnTecnico = document.querySelector('.tab-btn.tab-tecnico');
    const contentPaciente = document.getElementById('tab-paciente-content');
    const contentTecnico = document.getElementById('tab-tecnico-content');

    if (!btnPaciente || !btnTecnico || !contentPaciente || !contentTecnico) return;

    if (tipo === 'paciente') {
        btnPaciente.classList.add('active'); contentPaciente.classList.add('active');
        btnTecnico.classList.remove('active'); contentTecnico.classList.remove('active');
    } else {
        btnTecnico.classList.add('active'); contentTecnico.classList.add('active');
        btnPaciente.classList.remove('active'); contentPaciente.classList.remove('active');
    }
}

// 6. MANEJO INTERNO DE ÓRDENES DE EXPORTACIÓN Y CANALES
function agregarAlPedido(estudio) {
    if (!pedidoActual.some(e => e.nombre === estudio.nombre)) { pedidoActual.push(estudio); actualizarInterfaz(); }
    cerrarModal();
}

function actualizarInterfaz() {
    const status = document.getElementById("pedido-status");
    document.getElementById("contador-pedido").innerText = pedidoActual.length;
    status.style.display = pedidoActual.length > 0 ? "flex" : "none";
}

function vaciarPedido() { pedidoActual = []; actualizarInterfaz(); }

function enviarWhatsApp() {
    if (pedidoActual.length === 0) return;
    let mensaje = "*GUÍALAB - INDICACIONES PARA TUS ESTUDIOS* 🔬\n========================================\n\n";
    pedidoActual.forEach(est => { mensaje += `📌 *${est.nombre.toUpperCase()}*\n• *Preparación:* ${est.prepPaciente || est.toma}\n----------------------------------------\n`; });
    window.open(`https://wa.me/?text=${encodeURIComponent(mensaje)}`, '_blank');
}

function descargarTXT() {
    if (pedidoActual.length === 0) return;
    let texto = "GUÍALAB - INDICACIONES PRE-ANALÍTICAS\n\n";
    pedidoActual.forEach((est, i) => { texto += `[${i+1}] ${est.nombre}\n- Preparación: ${est.prepPaciente || est.toma}\n\n`; });
    const blob = new Blob([texto], { type: "text/plain;charset=utf-8" });
    const enlace = document.createElement("a");
    enlace.href = URL.createObjectURL(blob);
    enlace.download = `indicaciones-laboratorio.txt`;
    enlace.click();
}

function cerrarModal() { document.getElementById("modal").style.display = "none"; }
document.getElementById("closeModal").onclick = cerrarModal;
window.onclick = (e) => { if (e.target == document.getElementById("modal")) cerrarModal(); };

// 7. ESCUCHADOR DINÁMICO PARA EL DICCIONARIO MÉDICO (Botón de Info en perfiles)
document.addEventListener('click', (e) => {
    const boton = e.target.closest('.info-btn-perfil');
    if (boton) {
        const analisisNombre = boton.getAttribute('data-item');
        const descripcionClinica = glosarioPerfiles[analisisNombre] || "Información complementaria en fase de revisión.";
        const appModal = document.getElementById('modal');
        const appModalData = document.getElementById('modalData');
        
        if (appModal && appModalData) {
            appModalData.innerHTML = `
                <div class="modal-header-analisis" style="border-bottom: 1px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 14px;">
                    <h2 class="modal-title" style="color: #0284c7; font-size: 1.3rem;"><i class="fas fa-microscope"></i> Diccionario Médico</h2>
                </div>
                <div style="background-color: #f0fdf4; border: 1px solid #dcfce7; border-radius: 14px; padding: 16px;">
                    <h3 class="modal-subtitulo paciente" style="color: #166534; font-size: 1rem; margin-bottom: 6px;">${analisisNombre}</h3>
                    <p class="modal-texto" style="color: #334155; font-size: 0.92rem; line-height: 1.5;">${descripcionClinica}</p>
                </div>`;
            appModal.style.display = "flex";
        }
    }
});

// Limpieza automática por si el usuario decide volver a escribir en la barra de búsqueda
document.getElementById("searchInput").addEventListener("input", () => {
    if(document.getElementById("searchInput").value !== "") {
        document.getElementById("perfilSelect").value = ""; 
    }
    render();
});
