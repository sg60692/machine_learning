import io
import base64
import sys
import numpy as np
import tensorflow as tf
from PIL import Image

base64url = sys.argv[1][22:]


def stringToImage(data):
    return Image.open(io.BytesIO(base64.b64decode(data)))


def format(image):
    tempImg = image.convert("L").resize((28, 28))
    pix = np.array(tempImg)
    return pix.reshape(1, 28, 28, 1)


image = stringToImage(base64url)

formatted_image = format(image)

model = tf.keras.models.load_model('./script/digit.h5')

predictions = model.predict(formatted_image)
answer = np.argmax(predictions)

print("Predicted Number: ", answer, end="")
