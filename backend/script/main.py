import io
import base64
import sys
import numpy as np
from PIL import Image
import pickle
from sklearn.pipeline import Pipeline
from tensorflow.keras.models import load_model
import socketio as socket


def connect_socket():
    sio = socket.Client(logger=True, engineio_logger=True)
    sio.connect('https://mlprojects-backend.herokuapp.com')
    return sio


def load_models():
    Cancer_model = pickle.load(open('script/kNeighborsClassifier.pkl', 'rb'))

    Diabetes_scale = pickle.load(open('script/Scaler.pkl', 'rb'))
    Diabetes_model = load_model('script/neural_network_model.h5')
    Diabetes_pipeline = Pipeline(
        [('scaler', Diabetes_scale), ('Neural-network', Diabetes_model)])

    BoardGame_model = pickle.load(open('script/RFR.pkl', 'rb'))

    digit_model = load_model('script/digit.h5')

    return Cancer_model, Diabetes_pipeline, BoardGame_model, digit_model


sio = connect_socket()
Cancer_model, Diabetes_pipeline, BoardGame_model, digit_model = load_models()


@sio.event
def connect():
    print("I'm connected!")


@sio.event
def connect_error(data):
    print("The connection failed!")


@sio.on('my_message')
def my_message(data):
    print(data)
    sio.emit('message_received')


@sio.on('cancer')
def cancer(features):
    n_feature = np.array([int(feature) for feature in features])
    n_feature = [n_feature]
    result = np.squeeze(Cancer_model.predict(n_feature))
    if result == 2:
        return "Benign Cancer"
    return "Malignant Cancer"


@sio.on('boardGame')
def boardGame(feature):
    feature = [feature]
    result = np.squeeze(BoardGame_model.predict(feature))
    str_res = str(result)
    if len(str_res) > 5:
        str_res = str_res[:5]
    return str("Predicted Rating of game(out of 10): " + str(str_res))


@sio.on('diabetes')
def diabetes(feature):
    feature = [feature]
    prediction = Diabetes_pipeline.predict(feature).item()
    if prediction == 1:
        return "Patient has high chance of diabetes."
    return "Patient has low chance of diabetes."


@sio.on('digit')
def digit(url):
    base64url = url[22:]
    image = stringToImage(base64url)
    formatted_image = format(image)
    predictions = digit_model.predict(formatted_image)
    answer = np.argmax(predictions)
    return str("Predicted Number: " + str(answer))


def stringToImage(data):
    return Image.open(io.BytesIO(base64.b64decode(data)))


def format(image):
    tempImg = image.convert("L").resize((28, 28))
    pix = np.array(tempImg)
    return pix.reshape(1, 28, 28, 1)
