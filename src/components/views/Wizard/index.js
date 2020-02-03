import React, { Fragment } from 'react';

import Layout from 'components/shared/Layout';
import Editor from 'components/shared/Editor';
import Outputers from 'components/shared/Outputer';

import Fields from 'components/elements/Fields';

import './index.css';

export default class Wizard extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      output: props.output
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      output: nextProps.output
    });
  }

  render() {
    const { output } = this.state;
    const { form, compile, run } = this.props;

    return (
      <Layout>
        <div>
          <Form
            form={form}
            compile={compile}
            run={run}
          />
        </div>
      </Layout>
    );
  }
}

const Form = ({ form, compile, run }) => (
  <form id={form}>

    <Editor
      title='Определить в Problem-bsfParameters.h константные параметры модели BSF'
      name='bsfParameters'
    />
    <ButtonLine onClick={compile} />
    <Editor
      title='Определить в Problem-Parameters.h константные параметры задачи (размерность, число уравнений и т.п.)'
      name='parameters'
    />
    <ButtonLine onClick={compile} />
    <Fields
      title='Определить в Problem-bsfTypes.h предопределенные типы'
    >
      <Editor
        title='PT_bsf_data_T: описывает структуру данных, передаваемых каждому рабочему для выполнения очередной итерации (может содержать текущее приближение и другие параметры)'
        name='bsfTypes[PT_bsf_data_T]'
      />
      <Editor
        title='PT_bsf_mapElem_T: описывает структуру элемента списка «Map»'
        name='bsfTypes[PT_bsf_mapElem_T]'
      />
      <Editor
        title='PT_bsf_reduceElem_T: описывает структуру элемента списка «Reduce»'
        name='bsfTypes[PT_bsf_reduceElem_T]'
      />
    </Fields>
    <ButtonLine onClick={compile} />
    <Editor
      title='Определить в Problem-Types.h необходимые типы данных'
      name='types'
    />
    <ButtonLine onClick={compile} />
    <Editor
      title='Определить переменные (Problem Variables) и структуры данных (Problem Structures) в Problem_Data.h'
      name='data'
    />
    <ButtonLine onClick={compile} />
    <Editor
      title='Добавить в Problem-Forwards.h предописания пользовательских функций (User Function Forwards)'
      name='forwards'
    />
    <ButtonLine onClick={compile} />
    <Editor
      title='Добавить в Problem-Include.h включаемые библиотеки'
      name='include'
    />
    <ButtonLine onClick={compile} />

    <Fields
      title='Реализовать в Problem-bsfCode.cpp предопределенные проблемно-зависимые функции (Predefined Problem-Dependent Functions)'
    >
      <Editor
        title='PC_bsf_AssignListSize(int* listSize): присваивает переменной *listSize длину списка «Map» (совпадает с длиной списка «Reduce»)'
        name='bsfCode[PC_bsf_AssignListSize]'
      />
      <Editor
        title='PC_bsf_CopyData(PT_bsf_data_T* dataIn, PT_bsf_data_T* dataOut): копирует данные из структуры *dataOut в структуру *dataIn'
        name='bsfCode[PC_bsf_CopyData]'
      />
      <Editor
        title='PC_bsf_IterOutput(PT_bsf_reduceElem_T* reduceResult, int count, PT_bsf_data_T data, int iterCount, double elapsedTime): выводит результаты итерации, используя в качестве параметров reduceResult – результат выполнения функции Reduce над всем списком; count – количество элементов, участвовавших в Reduce; data – задание, выполненное на данной итерации; iterCount – количество выполненных итераций; elapsedTime – общее время, затраченное на решение задачи'
        name='bsfCode[PC_bsf_IterOutput]'
      />
      <Editor
        title='PC_bsf_Init(bool* success): выделяет память для проблемно-зависимых структур данных и выполняет их инициализацию; если необходимую память выделить не удалось, переменной *success должно быть присвоено значение false'
        name='bsfCode[PC_bsf_Init]'
      />
      <Editor
        title='PC_bsf_MapF(PT_bsf_mapElem_T* mapElem, PT_bsf_reduceElem_T* reduceElem, PT_bsf_data_T* data, int* success): вычисляет функцию F, являющуюся параметром оператора Map, используя аргументы *mapElem – элемент списка «Map», над которым выполняется функция F; *reduceElem – элемент списка «Reduce», которому должно быть присвоено значение функции F; *data – задание, содержащее текущее приближение; параметру *success должно быть присвоено значение 0, если полученный элемент списка «Reduce» должен игнорироваться при выполнении операции Reduce'
        name='bsfCode[PC_bsf_MapF]'
      />
      <Editor
        title='PC_bsf_ParametersOutput(int numOfWorkers, PT_bsf_data_T data): выводит начальные параметры задачи, используя аргументы numOfWorkers – количество процессов-рабочих и data – начальное задание, содержащее начальное приближение'
        name='bsfCode[PC_bsf_ParametersOutput]'
      />
      <Editor
        title='PC_bsf_ProblemOutput(PT_bsf_reduceElem_T* reduceResult, int count, PT_bsf_data_T data, int iterCount, double t): выводит конечные результаты работы программы, используя аргументы *reduceResult – результат выполнения оператора Reduce, count количество элементов «суммированных» при выполнении оператора Reduce, data – последнее задание (последнее приближение), t – общее время работы программы'
        name='bsfCode[PC_bsf_ProblemOutput]'
      />
      <Editor
        title='PC_bsf_ProcessResults(bool* exit, PT_bsf_reduceElem_T* reduceResult, int count, PT_bsf_data_T* data): обрабатывает результаты, полученные в результате выполнения очередной итерации, используя аргументы *reduceResult – результат выполнения оператора Reduce, count количество элементов «суммированных» при выполнении оператора Reduce, data – последнее задание (последнее приближение); если вычисления необходимо продолжить, переменной *exit присваивается значение true, в противном случае – false'
        name='bsfCode[PC_bsf_ProcessResults]'
      />
      <Editor
        title='PC_bsf_ReduceF(PT_bsf_reduceElem_T* x, PT_bsf_reduceElem_T* y, PT_bsf_reduceElem_T* z): реализует функцию, являющуюся аргументом оператора Reduce, по формуле z : = x  y'
        name='bsfCode[PC_bsf_ReduceF]'
      />
      <Editor
        title='PC_bsf_SetInitApproximation(PT_bsf_data_T* data): записывает в *data начальное задание (начальное приближение)'
        name='bsfCode[PC_bsf_SetInitApproximation]'
      />
      <Editor
        title='PC_bsf_SetMapSubList(PT_bsf_mapElem_T* subList, int count, int offset, bool* success): заполняет подсписок списка «Map», используя аргументы *subList – указатель на первый элемент подсписка, count – длина подсписка, offset – сдвиг, относительно начала списка; если у элемента списка «Map» имеются поля типа указатель, то необходимо выделить память под вектор, матрицу или другую структуру; если обнаружена нехватка памяти, переменной *success необходимо присвоить значение false'
        name='bsfCode[PC_bsf_SetMapSubList]'
      />
      <Editor
        title='Пользовательские функции'
        name='bsfCode[PC_user_Functions]'
      />
    </Fields>
    <ButtonLine onClick={run} text='Выполнить' />
  </form>
);

const ButtonLine = ({ onClick, text = 'Скомпилировать' }) => (
  <div className='button-line'>
    <button onClick={onClick}>{text}</button>
  </div>
);